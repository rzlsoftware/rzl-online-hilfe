import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

interface MigrationRoute {
  legacyPath: string;
  encodedLegacyPath: string;
  newPath: string;
}

interface MigrationReport {
  routes: MigrationRoute[];
}

interface RedirectRule {
  route: string;
  redirect: string;
  statusCode: 301;
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SWA_CONFIGURATION_LIMIT = 20 * 1024;
const SWA_CONFIGURATION_TARGET = 19_500;

function routeVariants(route: MigrationRoute): string[] {
  const variants = new Set<string>();
  for (const base of [route.legacyPath, route.encodedLegacyPath]) {
    variants.add(base);
    if (base !== '/') variants.add(`${base.replace(/\/+$/, '')}/index.html`);
  }
  return [...variants];
}

function depth(value: string): number {
  return value.split('/').filter(Boolean).length;
}

function staticWebAppConfiguration(routes: RedirectRule[]): Record<string, unknown> {
  return {
    trailingSlash: 'always',
    routes,
    responseOverrides: {
      404: {
        rewrite: '/404.html',
        statusCode: 404,
      },
    },
  };
}

async function main(): Promise<void> {
  const reportPath = path.join(ROOT, 'migration-report.json');
  const report = JSON.parse(await readFile(reportPath, 'utf8')) as MigrationReport;
  const complete = new Map<string, string>();

  for (const route of report.routes) {
    if (route.legacyPath === route.newPath) continue;
    for (const variant of routeVariants(route)) {
      const existing = complete.get(variant);
      if (existing && existing !== route.newPath) {
        throw new Error(`Conflicting redirects for ${variant}: ${existing} and ${route.newPath}`);
      }
      complete.set(variant, route.newPath);
    }
  }

  const allRules: RedirectRule[] = [...complete]
    .map(([route, redirect]) => ({ route, redirect, statusCode: 301 as const }))
    .sort((left, right) => left.route.localeCompare(right.route, 'de'));
  const prioritized = [...allRules].sort((left, right) => {
    const depthDifference = depth(left.route) - depth(right.route);
    if (depthDifference) return depthDifference;
    const indexDifference = Number(left.route.endsWith('/index.html')) - Number(right.route.endsWith('/index.html'));
    if (indexDifference) return indexDifference;
    return left.route.localeCompare(right.route, 'de');
  });

  const deployable: RedirectRule[] = [];
  for (const rule of prioritized) {
    const candidate = staticWebAppConfiguration([...deployable, rule]);
    const size = Buffer.byteLength(`${JSON.stringify(candidate, null, 2)}\n`);
    if (size <= SWA_CONFIGURATION_TARGET) deployable.push(rule);
  }
  deployable.sort((left, right) => left.route.localeCompare(right.route, 'de'));

  const configuration = staticWebAppConfiguration(deployable);
  const configurationJson = `${JSON.stringify(configuration, null, 2)}\n`;
  const configurationSize = Buffer.byteLength(configurationJson);
  if (configurationSize > SWA_CONFIGURATION_LIMIT) {
    throw new Error(`staticwebapp.config.json is ${configurationSize} bytes; Azure allows ${SWA_CONFIGURATION_LIMIT}.`);
  }

  const completeArtifact = {
    generatedFrom: 'migration-report.json',
    statusCode: 301,
    redirects: allRules,
    deployment: {
      provider: 'Azure Static Web Apps',
      configurationLimitBytes: SWA_CONFIGURATION_LIMIT,
      exactRulesInStaticWebAppConfig: deployable.length,
      fallbackRulesRequiringEdgeImport: allRules.length - deployable.length,
    },
  };
  const clientMap = Object.fromEntries(allRules.map(({ route, redirect }) => [route, redirect]));

  await mkdir(path.join(ROOT, 'public'), { recursive: true });
  await writeFile(path.join(ROOT, 'redirects.generated.json'), `${JSON.stringify(completeArtifact, null, 2)}\n`, 'utf8');
  await writeFile(path.join(ROOT, 'public/legacy-redirects.json'), `${JSON.stringify(clientMap)}\n`, 'utf8');
  await writeFile(path.join(ROOT, 'staticwebapp.config.json'), configurationJson, 'utf8');

  console.log(`Generated ${allRules.length} complete redirect rules.`);
  console.log(`Placed ${deployable.length} exact 301 rules in the ${configurationSize}-byte Azure configuration.`);
  if (deployable.length < allRules.length) {
    console.log(`${allRules.length - deployable.length} rules remain in the full edge-import artifact and client fallback map.`);
  }
}

await main();

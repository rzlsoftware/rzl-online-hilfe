import { expect, test } from '@playwright/test';

test('MDX homepage cards lead to usable desktop and mobile navigation', async ({ page, isMobile }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Herzlich willkommen auf der RZL Hilfe!');
  const cards = page.locator('main .card-grid');
  await expect(cards.getByRole('link')).toHaveCount(13);
  await expect(cards.getByRole('link', { name: 'FIBU Next', exact: true })).toHaveAttribute('href', '/fibu-next/');
  await cards.getByRole('link', { name: 'Setup', exact: true }).click();
  await expect(page).toHaveURL('/setup/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Setup Handbuch');

  const menu = page.getByRole('button', { name: 'Men\u00fc', exact: true });
  const sidebar = page.locator('#starlight__sidebar');
  if (isMobile) {
    await expect(menu).toHaveAttribute('popovertarget', 'starlight__sidebar');
    await expect(sidebar).toBeHidden();
    await menu.click();
    await expect(page.locator('#starlight__sidebar:popover-open')).toBeVisible();
    await expect(page.locator('.main-frame')).toHaveAttribute('inert', '');
    await page.keyboard.press('Escape');
    await expect(sidebar).toBeHidden();
    await expect(page.locator('.main-frame')).not.toHaveAttribute('inert');
    await expect(menu).toBeFocused();
    await menu.click();
  } else {
    await expect(menu).toBeHidden();
    await expect(sidebar).toBeVisible();
  }

  await sidebar.getByRole('link', { name: 'Installation', exact: true }).click();
  await expect(page).toHaveURL('/setup/installation/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Installation');
  await expect(page.locator('.main-frame')).not.toHaveAttribute('inert');
  if (isMobile) await expect(sidebar).toBeHidden();
});

test('Pagefind is German and program filtering preserves counts and every result page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Suchen', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Suchen' });
  const input = dialog.getByPlaceholder('Suchen', { exact: true });
  const filter = dialog.getByRole('combobox', { name: 'Programm', exact: true });
  const message = dialog.locator('.pagefind-ui__message');
  const results = dialog.locator('.pagefind-ui__results > .pagefind-ui__result');
  const more = dialog.getByRole('button', { name: 'Weitere Treffer laden', exact: true });

  await expect(input).toHaveAccessibleName('Suchen');
  await input.fill('qzxvkeintrefferxyz');
  await expect(message).toHaveText('Keine Treffer f\u00fcr \u201eqzxvkeintrefferxyz\u201c');
  await expect(results).toHaveCount(0);
  await expect(more).toBeHidden();
  await dialog.getByRole('button', { name: 'L\u00f6schen', exact: true }).click();
  await expect(input).toHaveValue('');

  await input.fill('Installation');
  const allOption = filter.locator('option[value=""]');
  const setupOption = filter.locator('option[value="setup"]');
  await expect(allOption).toHaveText(/^Alle Programme \([1-9]\d*\)$/);
  await expect(setupOption).toHaveText(/^Setup \([1-9]\d*\)$/);
  const total = Number((await allOption.textContent())!.match(/\((\d+)\)/)![1]);
  const matching = Number((await setupOption.textContent())!.match(/\((\d+)\)/)![1]);
  expect(matching).toBeGreaterThan(5);
  expect(total).toBeGreaterThan(matching);
  await expect(message).toHaveText(`${total} Treffer f\u00fcr \u201eInstallation\u201c`);
  await expect(results).toHaveCount(5);

  await filter.selectOption('setup');
  const checkedFilters = dialog.locator('input.pagefind-ui__filter-checkbox[name="program"]:checked');
  await expect(dialog.locator('input.pagefind-ui__filter-checkbox[name="program"][value="setup"]')).toBeChecked();
  await expect(checkedFilters).toHaveCount(1);
  await expect(message).toHaveText(`${matching} Treffer f\u00fcr \u201eInstallation\u201c`);
  await expect(results).toHaveCount(5);

  // Exhaust the filtered results, not just the first five: DOM-only filtering loses later matches.
  for (let loaded = 5; loaded < matching; loaded += 5) {
    await more.click();
    await expect(results).toHaveCount(Math.min(loaded + 5, matching));
  }
  await expect(more).toBeHidden();
  const pageLinks = results.locator('.pagefind-ui__result-inner > .pagefind-ui__result-title a');
  await expect(pageLinks).toHaveCount(matching);
  const paths = await pageLinks.evaluateAll((links) =>
    links.map((link) => new URL((link as HTMLAnchorElement).href).pathname),
  );
  expect(new Set(paths).size).toBe(matching);
  expect(paths.every((path) => path.startsWith('/setup/'))).toBe(true);
  for (const result of await results.all()) await expect(result).toBeVisible();
  await expect(message).toHaveText(`${matching} Treffer f\u00fcr \u201eInstallation\u201c`);

  await filter.selectOption('');
  await expect(checkedFilters).toHaveCount(0);
  await expect(message).toHaveText(`${total} Treffer f\u00fcr \u201eInstallation\u201c`);
  await expect(results).toHaveCount(5);
  await expect(more).toBeVisible();
});

test('a real search result carries and clears in-page highlights', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Suchen', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Suchen' });
  // This body term is not in the target title, where highlighting is intentionally suppressed.
  await dialog.getByPlaceholder('Suchen', { exact: true }).fill('Rollenzuweisung');
  const result = dialog.locator(
    '.pagefind-ui__result-inner > .pagefind-ui__result-title a[href^="/technik/nutzung-fraghainz/"]',
  );
  await expect(result).toHaveAttribute('href', /[?&]highlight=Rollenzuweisung(?:&|#|$)/);
  await result.click();
  await expect(page).toHaveURL(/\/technik\/nutzung-fraghainz\/\?highlight=Rollenzuweisung/);
  const marks = page.locator('main mark.rzl-search-highlight');
  await expect(marks.first()).toBeVisible();
  await expect(marks.first()).toHaveText(/Rollenzuweisung/i);
  await expect(page.locator('h1 mark.rzl-search-highlight')).toHaveCount(0);
  await page.getByRole('button', { name: /Hervorhebung entfernen/ }).click();
  await expect(marks).toHaveCount(0);
  await expect(page).not.toHaveURL(/[?&]highlight=/);
});

test('legacy widths and theme variants survive the production Markdown pipeline', async ({ page }) => {
  await page.goto('/technik/erste-schritte/');
  const article = page.locator('.sl-markdown-content');
  const lightIcon = article.locator('img.img-light[alt="herz_neuronen"]');
  const darkIcon = article.locator('img.img-dark[alt="herz_neuronen"]');
  const banner = article.locator('img.img-light[alt="Icon Technik"]');
  await expect(banner).toHaveAttribute('style', /width:\s*1000px/);
  await expect(lightIcon).toHaveCSS('width', '25px');
  await expect(lightIcon).toHaveCSS('display', 'inline-block');
  await expect(lightIcon).toBeVisible();
  await expect(darkIcon).toBeHidden();
  await expect(article).not.toContainText('{:width=');
  await expect(article.locator('img[src*="#only-"]')).toHaveCount(0);
  await expect
    .poll(() => lightIcon.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0))
    .toBe(true);

  // Emulate the system preference so the same test works with the mobile theme picker in the closed menu.
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(lightIcon).toBeHidden();
  await expect(darkIcon).toBeVisible();
  await expect(darkIcon).toHaveCSS('width', '25px');
  await expect(darkIcon).toHaveCSS('display', 'inline-block');
  await expect
    .poll(() => darkIcon.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0))
    .toBe(true);
});

test('the real client 404 fallback resolves a legacy URL and leaves unknown URLs readable', async ({
  page,
  request,
}) => {
  const legacyPath = '/Belegverarbeitung/Belege%20nachtr%C3%A4glich%20zuordnen%20oder%20entfernen/';
  const target = '/belegverarbeitung/belege-nachtraeglich-zuordnen-oder-entfernen/';
  const unknownPath = '/__e2e_missing_page__/';
  const notFound = await request.get('/404.html');
  expect(notFound.ok()).toBe(true);
  const body = await notFound.body();
  // Preview does not implement Azure responseOverrides. Serve the built 404 at the requested URL;
  // its script, redirect map fetch, and final destination all remain real production assets.
  await page.route(
    (url) => url.pathname === legacyPath || url.pathname === unknownPath,
    (route) => route.fulfill({ status: 404, contentType: 'text/html', body }),
  );
  await page.goto(legacyPath);
  await expect(page).toHaveURL(target);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Belege nachtr\u00e4glich zuordnen oder entfernen');

  const mapLoaded = page.waitForResponse((response) => response.url().endsWith('/legacy-redirects.json'));
  await page.goto(unknownPath);
  expect((await mapLoaded).ok()).toBe(true);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Seite nicht gefunden');
  await expect(page).toHaveURL(unknownPath);
  await page.getByRole('link', { name: 'Zur Startseite', exact: true }).click();
  await expect(page).toHaveURL('/');
});

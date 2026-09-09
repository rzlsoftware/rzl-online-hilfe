import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? 2 : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4322',
    locale: 'de-AT',
    colorScheme: 'light',
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'desktop-chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chromium', use: { ...devices['Pixel 7'] } },
  ],
  // Build separately: dev mode has no Pagefind index, and stale servers can hide regressions.
  webServer: {
    command: 'pnpm preview --host 127.0.0.1 --port 4322 --ignore-lock',
    // Astro auto-detaches when it detects an agent; Playwright must own this process.
    env: { ASTRO_PREVIEW_BACKGROUND: '0' },
    url: 'http://127.0.0.1:4322',
    reuseExistingServer: false,
  },
});

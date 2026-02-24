import { test, expect } from '@playwright/test';

test('בדיקת תקינות סביבה', async ({ page }) => {
  await page.goto('https://www.google.com');
  const title = await page.title();
  console.log(`Title found: ${title}`);
  await expect(page).toHaveTitle(/Google/);
});
import { test, expect } from '@playwright/test';
import * as path from 'path';

test.use({
  storageState: path.join(__dirname, '../playwright/.auth/user.json')
});

test('dashboard loads after login', async ({ page }) => {
  // Open dashboard
  await page.goto('/Teacher/v2/en/home');

  // Check something that only appears after login
    await expect(page.locator('text=Home')).toBeVisible();

});

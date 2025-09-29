import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test('can access MyMusicStaff homepage', async ({ page }) => {
  // Go to the main page
  await page.goto(process.env.MMS_SCHOOL_URL!);
  
  // Check that we can see the login form (this proves the site loads)
  await expect(page.locator('text=Welcome back!')).toBeVisible();
  
  // Check that email field is present
  await expect(page.locator('input[placeholder="Email"]')).toBeVisible();
  
  // Check that password field is present  
  await expect(page.locator('input[placeholder="Password"]')).toBeVisible();
  
  // Check that login button is present
  await expect(page.locator('text=Log In')).toBeVisible();
});
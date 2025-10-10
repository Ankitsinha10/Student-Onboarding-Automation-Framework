import { test, expect } from '@playwright/test';

test.describe('Student Form Validation', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to Add Student Form
        await page.goto('/Teacher/v2/en/students/add');

        // Wait for the form to be fully loaded
        
        await expect(page.locator('text=Step 1/2')).toBeVisible();

        console.log('Form loaded successfully');
    });

    test('should show validation errors when submitting empty form', async ({ page }) => {
        console.log('Testing empty form validation...');

        // Try to submit empty form by clicking Next
        await page.getByRole('button', {name: 'Next'}).click()

        // Check for validation error messages
        await expect(page.locator('text=Please enter a first name').first()).toBeVisible();
        await expect(page.locator('text=Please enter a last name').first()).toBeVisible();

        // Check if form is still on step 1
        await expect(page.locator('text=Step 1/2')).toBeVisible();

        // Take screenshot
        await page.screenshot({
            path: 'test-results/empty-form-validation.png',
            fullPage: true
        });


        console.log('✓Empty Form validation working');
    });

    test('should require First Name when Last Name is filled', async ({ page }) => {
        
        console.log('Testing First Name validation...');

        // Get the Last Name input - it's the second input in the form
        const inputs = page.locator('input[id*="mat-input"]');
        await inputs.nth(1).fill('TestLastName'); // Second input is Last Name
        console.log("Filled Last Name")

        // Fill email
        await inputs.nth(2).fill('test@example.com'); // Third input is Email

        console.log('Filled Last Name and Email');

        // Try to submit
        await page.click('button:has-text("Next")');
        await page.waitForTimeout(1500);

        // Should show First Name error
        await expect(page.locator('text=Please enter a first name').first()).toBeVisible();

        // Take screenshot
        await page.screenshot({
            path: 'test-results/first-name-validation.png',
            fullPage: true
        });

        // Should still be on step 1
        await expect(page.locator('text=Step 1/2')).toBeVisible();

        console.log('✓ First Name validation working!');
    });

    test('should require Last Name when First Name is filled', async ({ page }) => {
        console.log('Testing Last Name validation...');

        // Get inputs and fill First Name (first input)

        //Use the working method selector for inputs:-
        const inputs = page.locator('input[id*="mat-input"]');

        //Fill First name (first input)
        await inputs.nth(0).fill('TestFirstName'); // First input is First Name
        console.log('Filled First Name')

        // Fill Email
        await inputs.nth(2).fill('test@example.com'); // Third input is Email
        console.log("Filled Email")
        console.log('Filled First Name and Email');

        // Try to submit
        await page.getByRole('button', {name: 'Next'}).click();

        //Wait for navigation
        await page.waitForTimeout(1500);

        // Should show Last Name error
        await expect(page.locator('text=Please enter a last name').first()).toBeVisible();

        // Take screenshot
        await page.screenshot({
            path: 'test-results/last-name-validation.png',
            fullPage: true
        });

        // Should still be on step 1
        await expect(page.locator('text=Step 1/2')).toBeVisible();

        console.log('✓ Last Name validation working!');
    });
});
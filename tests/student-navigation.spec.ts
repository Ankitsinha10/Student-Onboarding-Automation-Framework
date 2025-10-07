import {test, expect} from '@playwright/test';

test ('can navigate to Add Student page', async ({page}) => {

    //Increase page load timeout

    page.setDefaultTimeout(60000);

//Start from the dashboard (we're already logged in via saved session)
await page.goto('/Teacher/v2/en/home');


//Wait a bit for the page tto stabilize
await page.waitForTimeout(3000);

//Take a screenshot to see what's actually showing

await page.screenshot({path: 'debug-home-page.png'});


//Check if we are acrtually logged in or redirected to login

const currentUrl = page.url();
console.log('Current URL:', currentUrl)

//If we see login page, the session expired 

if (currentUrl.includes('Default.aspx') || currentUrl.includes('login')) {
    console.log('Session expired - need to re-authenticate');
    throw new Error('Session expired. Run: npx playwright test --project=auth-setup')
}



//Verify we're on the dashboard
await expect(page.locator('text=Home')).toBeVisible();

//Click on "Add a Student" button in the quick actions
await page.click('text=Add a Student');

//Wait for navigation to the add Student page 

await page.waitForURL ('**/students#Students');

//Click the "Add New" button to open dropdown
await page.click('button:has-text("Add New")');

//Click "New Student" from the dropdown

await page.click('text=New Student');

//Wait for the add student form to appear
await page.waitForURL('**/students/add');

//Verify we see the form

await expect(page.locator('text=Add New Student')).toBeVisible();
await expect(page.locator('text=Student Details')).toBeVisible();

console.log('Successfully navigated to Add Student page!');

});


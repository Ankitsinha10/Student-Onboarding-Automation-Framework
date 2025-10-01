import {test as setup} from '@playwright/test' ;
import * as dotenv from 'dotenv' ;
import * as fs from 'fs' ;
import * as path from 'path';

dotenv.config();

//Path to save auththentication session
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({page}) => {

    //Increase timeout for this test to 3 minutes 
    setup.setTimeout(150000)

    //Go to login page
    await page.goto(process.env.MMS_SCHOOL_URL!);

    //Wait for the page to load
    await page.waitForSelector('input[placeholder="Email"]');

    console.log('Please login manually in the browser window....');
    console.log('After you login and reach the dashboard, the test will continue automatically.');

    //Wait for navigation to dashboard (indicates successful login)

    await page.waitForURL('**/Teacher/v2/**', {timeout: 120000});

    console.log('Login detected! Saving Session...');

    //Create directory if it doesn't exist

    const dir = path.dirname(authFile);
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }

    //Save the authentication state

    await page.context().storageState({path:authFile});

    console.log('Session saved successfully!');

});

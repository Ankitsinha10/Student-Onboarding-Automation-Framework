import {test,expect} from '@playwright/test';
import * as path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test.use({storageState: authFile}) ;

test('dashboard loads after login', async ({page}) => {

    //Open dashboard
    await page.goto(process.env.MMS_SCHOOL_URL!);

    //Check something that only appears after login

    await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();

});
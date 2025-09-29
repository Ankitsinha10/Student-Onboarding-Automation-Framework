import {Page, Locator} from '@playwright/test' ;
export class LoginPage {
    private page: Page;

    //Define the elements on the page
    private emailInput: Locator ;
    private passwordInput: Locator ;
    private loginButton: Locator;
    private welcomeText: Locator;

    constructor(page:Page) {
        this.page = page;
        this.emailInput = page.locator('input[placeholder="Email"]');
        this.passwordInput = page.locator('input[placeholder="Password"]');
        this.loginButton = page.locator('text=Log In');
        this.welcomeText = page.locator('text=Welcome back!');
    }

    //Actions we can perform on this page
    async goto() {
        await this.page.goto('/');
    }

    async fillEmail(email:string) {
        await this.emailInput.fill(email);
    }

    async fillPassword(password:string) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click()
    }

    
    // Verification methods
    async isLoaded() {
        await this.welcomeText.waitFor({state:'visible'});
        return true;
    }
    async isEmailFieldVisible() {
        return await this.emailInput.isVisible();
    }
}
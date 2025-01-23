import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private loginErrorMessage: Locator;
  private admin: Locator;
  private logOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(``);
    this.passwordInput = page.locator(``);
    this.loginButton = page.locator(``);
    this.loginErrorMessage = page.locator(``);
    this.admin = page.locator('');
    this.logOut = page.locator("");
  }

  /**
   * @Test0 This method logs in the user with valid credentials.
   *
   * @description This method performs the login operation using the provided valid credentials. It highlights the input
   *              fields for better visibility during interaction and fills the username and password fields. After submitting
   *              the login form by clicking the login button, it validates the success of the login process. The login is
   *              considered successful if there are no errors.
   */
  async performLogin() {
    // Write your logic here
  }
}

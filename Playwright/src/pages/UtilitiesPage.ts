import { Page, Locator } from "@playwright/test";

export default class UtilitiesPage {
  readonly page: Page;
  public utilities: {
    utilitiesLink: Locator;
    schemeRefundTab: Locator;
    counterItem: Locator;
    newSchemenRefundEntryButton: Locator;
    saveSchemeRefundButton: Locator;
    warningPopup: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.utilities = {
      utilitiesLink: page.locator(""),
      schemeRefundTab: page.locator(''),
      counterItem: page.locator(""),
      newSchemenRefundEntryButton: page.locator(``),
      saveSchemeRefundButton: page.locator(``),
      warningPopup: page.locator(``),
    };
  }

  /**
 * @Test6
 * @description This method verifies that a warning popup is displayed when attempting to save a new 
 *              Scheme Refund Entry without filling in mandatory fields.
 * @expected
 * A warning popup should appear with the message: "Please fill all the mandatory fields."
 */
  async verifyMandatoryFieldsWarning() {
    // Write your logic here
  }
}

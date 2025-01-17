import { Locator, Page } from "@playwright/test";

export class SettingsPage {
    readonly page: Page;
    public settings: {
        settingsLink: Locator;
        moreDropdown: Locator;
        priceCategoryTab: Locator;
        disableButton: (code: string) => Locator;
        enableButton: (code: string) => Locator;
        activateSuccessMessage: Locator;
        deactivateSuccessMessage: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.settings = {
            settingsLink: page.locator(''),
            moreDropdown: page.locator(''),
            priceCategoryTab: page.locator(''),
            disableButton: (code: string) =>
                page.locator(``),
            enableButton: (code: string) =>
                page.locator(``),
            activateSuccessMessage: page.locator(''),
            deactivateSuccessMessage: page.locator(''),
        }
    }

    /**
     * @Test10
     * @description This method verifies disabling and enabling a price category code in the table.
     * @expected
     * A success message is displayed for both actions: "Deactivated." for disabling and "Activated." for enabling.
     */
    async togglePriceCategoryStatus() {
        // Write your logic here
    }
}
import { Locator, Page } from "playwright";

export default class IncentivePage {
    readonly page: Page;
    public incentive: {
        incentiveLink: Locator;
        settingsTab: Locator;
        searchBar: Locator;
        editTDSButton: Locator;
        editTDSModal: Locator;
        tdsInputField: Locator;
        updateTDSButton: Locator;
        tdsValueInTable: Locator;
    };

    constructor(page: Page) {
        this.page = page;
        this.incentive = {
            incentiveLink: page.locator(``),
            settingsTab: page.locator(''),
            searchBar: page.locator(``),
            editTDSButton: page.locator(``),
            editTDSModal: page.locator(''),
            tdsInputField: page.locator(''),
            updateTDSButton: page.locator(''),
            tdsValueInTable: page.locator(``),
        };
    }

    /**
     * @Test9
     * @description This method updates the TDS% for a specific employee and verifies the updated value in the table.
     * @expected
     * The updated TDS% value is displayed correctly in the corresponding row of the table.
     */
    async editTDSForEmployee() {
        // Write your logic here
    }
}
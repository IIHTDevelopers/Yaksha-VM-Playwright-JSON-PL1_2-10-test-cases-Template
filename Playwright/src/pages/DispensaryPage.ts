import { Locator, Page } from "playwright";

export default class DispensaryPage {
    readonly page: Page;
    public locators: {
        dispensaryLink: Locator;
        reportsTab: Locator;
        userCollectionReport: Locator;
        fromDate: Locator;
        showReportButton: Locator;
        exportButton: Locator;
    };

    constructor(page: Page) {
        this.page = page;
        this.locators = {
            dispensaryLink: page.locator(''),
            reportsTab: page.locator(``),
            fromDate: page.locator(''),
            userCollectionReport: page.locator(``),
            showReportButton: page.locator(``),
            exportButton: page.locator(``),
        };
    }

    /**
     * @Test6
     * @description This method verifies the export functionality for the User Collection Report.
     * @expected The exported file should download with the name `PharmacyUserwiseCollectionReport_2025`.
     */
    async verifyExportUserCollectionReport(): Promise<void> {
        // Write your logic here
    }
}

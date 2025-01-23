import { Page, Locator } from "@playwright/test";

export default class OperationTheatrePage {
    readonly page: Page;
    public otBooking: {
        operationTheatreLink: Locator;
        newOtBookingButton: Locator;
        addNewOtButton: Locator;
        modalHeading: Locator;
    };

    constructor(page: Page) {
        this.page = page;
        this.otBooking = {
            operationTheatreLink: page.locator(``),
            newOtBookingButton: page.locator(``),
            addNewOtButton: page.locator(``),
            modalHeading: page.locator(``),
        };
    }

    /**
     * @Test2
     * @description This method verifies and handles the alert for OT booking without patient selection.
     */
    async handleOtBookingAlert() {
        // Write your logic here
    }
}

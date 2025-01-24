import { Page, Locator } from "@playwright/test";

export default class AppointmentPage {
  readonly page: Page;
  public appointment: {
    appointmentLink: Locator;
    counterItem: Locator;
    appointmentBookingList: Locator;
    visitTypeDropdown: Locator;
    fromDate: Locator;
    showPatient: Locator;
    visitTypeColumn: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.appointment = {
      appointmentLink: page.locator(''),
      counterItem: page.locator(""),
      appointmentBookingList: page.locator(``),
      visitTypeDropdown: page.locator(``),
      fromDate: page.locator(``),
      showPatient: page.locator(``),
      visitTypeColumn: page.locator(``),
    };
  }

  /**
     * @Test1
     * @description This method verifies the 'Visit Type' dropdown functionality and validates 'New Visit' patients.
     */
  async verifyVisitTypeDropdown() {
    // Write your logic here
  }
}

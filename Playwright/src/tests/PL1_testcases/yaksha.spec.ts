import { expect, test, Page } from "playwright/test";
import AppointmentPage from "../../pages/AppointmentPage";
import UtilitiesPage from "../../pages/UtilitiesPage";
import { LoginPage } from "../../pages/LoginPage";
import ProcurementPage from "../../pages/ProcurementPage";
import PatientPage from "../../pages/PatientPage";
import { SettingsPage } from "src/pages/SettingsPage";
import OperationTheatrePage from "src/pages/OperationTheatrePage";
import DoctorPage from "src/pages/DoctorPage";
import AdminPage from "src/pages/AdminPage";
import IncentivePage from "src/pages/IncentivePage";

test.describe("Yaksha", () => {
  let appointmentPage: AppointmentPage;
  let operationTheatrePage: OperationTheatrePage;
  let doctorsPage: DoctorPage;
  let utilitiesPage: UtilitiesPage;
  let adminPage: AdminPage;
  let incentivePage: IncentivePage;
  let procurementPage: ProcurementPage;
  let loginPage: LoginPage;
  let patientPage: PatientPage;
  let settingsPage: SettingsPage;

  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL as string);

    // Initialize page objects
    loginPage = new LoginPage(page);
    utilitiesPage = new UtilitiesPage(page);
    appointmentPage = new AppointmentPage(page);
    operationTheatrePage = new OperationTheatrePage(page);
    adminPage = new AdminPage(page);
    incentivePage = new IncentivePage(page);
    doctorsPage = new DoctorPage(page);
    procurementPage = new ProcurementPage(page);
    patientPage = new PatientPage(page);
    settingsPage = new SettingsPage(page);

    // Login before each test
    await loginPage.performLogin();

    // Verify login was successful
    await verifyUserIsLoggedin(page);
  });

  // Individual test cases
  test("TS-1 Verify 'Visit Type' Appointment Dropdown Functionality", async ({ page }) => {
    await appointmentPage.verifyVisitTypeDropdown();
    await verifyVisitType(page);
  });

  test("TS-2 Handle Alert for OT Booking Without Patient Selection", async ({ page }) => {
    await operationTheatrePage.handleOtBookingAlert();
    await otBookingModalIsDisplayed(page)
  });

  test("TS-3 Verify Patient Overview Page Displayed Correctly", async ({ page }) => {
    await doctorsPage.verifyPatientOverview();
    await verifyUserIsOnCorrectURL(page, "Doctors/PatientOverviewMain/PatientOverview");
  });

  test("TS-4 Add Progress Note for In Patient", async ({ page }) => {
    await doctorsPage.addProgressNoteForPatient();
    await verifyUserIsOnCorrectURL(page, "Doctors/PatientOverviewMain/NotesSummary/NotesList");
  });

  test("TS-5 Add and Verify New Currency in Settings", async ({ page }) => {
    await procurementPage.addCurrencyAndVerify();
    await verifyUserIsOnCorrectURL(page, "ProcurementMain/Settings/CurrencyList");
  });

  test("TS-6 Verify Warning Popup for Mandatory Fields in Scheme Refund", async ({ page }) => {
    await utilitiesPage.verifyMandatoryFieldsWarning();
    await verifyUserIsOnCorrectURL(page, "/Utilities/SchemeRefund");
  });

  test("TS-7 Verify Navigation to User Profile Page", async ({ page }) => {
    await adminPage.verifyUserProfileNavigation();
    await verifyUserIsOnCorrectURL(page, "Employee/ProfileMain/UserProfile");
  });

  test("TS-8 Verify Patient Profile Picture Upload", async ({ page }) => {
    await patientPage.uploadProfilePicture();
    await verifyImageisUploaded(page);
  });

  test('TS-9 Verify TDS Percent update for an employee', async ({ page }) => {
    await incentivePage.editTDSForEmployee();
  });

  test("TS-10 Verify Price Category Enable/Disable", async ({ page }) => {
    await settingsPage.togglePriceCategoryStatus();
    await verifyUserIsOnCorrectURL(page, "Settings/PriceCategory");
  });
});


/**
 * ------------------------------------------------------Helper Methods----------------------------------------------------
 */

async function verifyUserIsLoggedin(page: Page) {
  // Verify successful login by checking if 'admin' element is visible
  await page
    .locator('//li[@class="dropdown dropdown-user"]')
    .waitFor({ state: "visible", timeout: 20000 });
  expect(
    await page.locator('//li[@class="dropdown dropdown-user"]').isVisible()
  );
}

async function verifyVisitType(page: Page) {
  const tableLength = (await page.$$(`div[col-id="AppointmentType"]`)).length;
  expect(tableLength).toBeGreaterThan(1);
}

async function verifyUserIsOnCorrectURL(page: Page, expectedURL: string) {
  const getActualURl = page.url();
  expect(getActualURl).toContain(expectedURL);
}

async function verifyImageisUploaded(page: Page) {
  const isImgUploaded = await page.locator(`div.wrapper img`).isVisible();
  expect(isImgUploaded).toBeTruthy();
}

async function otBookingModalIsDisplayed(page: Page) {
  expect(await page.locator(`div.modelbox-div`).isVisible()).toBeTruthy();
}
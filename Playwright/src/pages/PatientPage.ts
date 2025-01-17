import { Page, Locator } from "@playwright/test";

export default class PatientPage {
  readonly page: Page;
  public patient: {
    patientLink: Locator;
    registerPatient: Locator;
    newPhotoButton: Locator;
    uploadButton: Locator;
    doneButton: Locator;
    uploadedImg: Locator;
    profilePictureIcon: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.patient = {
      patientLink: page.locator(''),
      registerPatient: page.locator(``),
      newPhotoButton: page.locator(''),
      uploadButton: page.locator(''),
      doneButton: page.locator(''),
      uploadedImg: page.locator(''),
      profilePictureIcon: page.locator(''),
    };
  }

  /**
   * @Test8
   * @description This method verifies the successful upload of a profile picture for a patient by navigating to the "Register Patient" tab 
   *              and completing the upload process.
   * @expected
   * Verify that the uploaded image is displayed successfully in the patient's profile.
   */
  async uploadProfilePicture() {
    // Write your logic here
  }
}

import { Page, Locator } from "@playwright/test";

export default class DoctorPage {
    readonly page: Page;
    public doctor: {
        doctorLink: Locator;
        inPatientTab: Locator;
        searchBox: Locator;
        actionsPreviewIcon: Locator;
        patientNameHeading: Locator;
        notesSection: Locator;
        addNotesButton: Locator;
        templateDropdown: Locator;
        subjectiveNotesField: Locator;
        successConfirmationPopup: Locator;
        saveNotesButton: Locator;
        noteType: Locator
    };

    constructor(page: Page) {
        this.page = page;
        this.doctor = {
            doctorLink: page.locator(``),
            inPatientTab: page.locator(``),
            searchBox: page.locator(``),
            actionsPreviewIcon: page.locator(``),
            patientNameHeading: page.locator(``),
            notesSection: page.locator(``),
            addNotesButton: page.locator(``),
            templateDropdown: page.locator(``),
            subjectiveNotesField: page.locator(``),
            successConfirmationPopup: page.locator(``),
            saveNotesButton: page.locator(``),
            noteType: page.locator(``),
        };
    }

    /**
   * @Test3 
   * @description This method searches for a patient and verifies their overview page.
   */
    async verifyPatientOverview() {
        // Write your logic here
    }

    /**
 * @Test4 
 * @description This method searches for a specific patient in the In Patient Department, navigates to the patient's 
 *              overview page, and adds a Progress Note. The method ensures that the note is successfully added 
 *              and verifies the confirmation message.
 * @expected 
 * The method should successfully add a Progress Note for the patient, and a success confirmation message 
 * with the text "Progress Note Template added." should be displayed.
 */
    async addProgressNoteForPatient() {
        // Write your logic here
    }
}
import { BasePage } from "./base.page";

export class WebTables extends BasePage{
    static get url() {
        return "/webtables";
    }

    static get addButton() {
        return cy.get("[id='addNewRecordButton']");
    }

    static get firstNameInput() {
        return cy.get("[id='firstName']");
    }

    static get lastNameInput() {
        return cy.get("[id='lastName']");
    }

    static get emailInput() {
        return cy.get("[id='userEmail']");
    }

    static get ageInput() {
        return cy.get("[id='age']");
    }

    static get salaryInput() {
        return cy.get("[id='salary']");
    }

    static get departmentInput() {
        return cy.get("[id='department']");
    }

    static get submitButton() {
        return cy.get("[id='submit']");
    }

    static get tableRows() {
        return cy.get("[role='rowgroup']");
    }

    static get deleteButtons() {
        return cy.get(".action-buttons [title='Delete']");
    }

    static deleteBasedOnOption(option) {
        return this.tableRows.contains(option).parent().find("[title='Delete']");
    }

    static get EmptyTableResult() {
        return cy.get("[class='rt-noData']");
    }   
}
import { BasePage } from "./base.page";

export class RadioButtonPage extends BasePage {
    static get url() {
        return "/radio-button";
    }

    static get yesRadioButton() {
        return cy.get("[for='yesRadio']");
    }

    static get yesRadioResult() {
        return cy.get("[class='text-success']");
    }

    static get impressiveButton() {
        return cy.get("[for='impressiveRadio']");
    }

    static get impressiveButtonResult() {
        return cy.get("[class='text-success']");
    }

    static get noButton() {
        return cy.get("[for='noRadio']");
    }
}
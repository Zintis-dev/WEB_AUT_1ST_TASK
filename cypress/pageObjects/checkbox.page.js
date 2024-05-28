import { BasePage } from "./base.page";

export class CheckBoxPage extends BasePage {
    static get url() {
        return "/checkbox";
    }

    static get expandButton() {
        return cy.get("[title='Expand all']");
    }

    static get checkBoxes() {
        return cy.get("[class='rct-title']");
    }

    static get chekcBoxesResult() {
        return cy.get("[class='text-success']");
    }
}
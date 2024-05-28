const { CheckBoxPage } = require("../../pageObjects/checkbox.page");
const { RadioButtonPage } = require("../../pageObjects/radioButton.page");
const { TextboxPage } = require("../../pageObjects/textbox.page");
const { WebTables } = require("../../pageObjects/webtables.page");

describe("Demoqa", ()=>{
    context("Text Box", ()=>{

        beforeEach(() => {
            TextboxPage.visit();
          });

        it("Enter Field Values - possitive test", ()=>{
            TextboxPage.fullNameField.type("Test User Name");
            TextboxPage.userEmailField.type("example@email.com");
            TextboxPage.currentAddressField.type("Riga, Azerbaijan street 18, Some parish");
            TextboxPage.pernamentAddressField.type("Riga, Azerbaijan street 18, Some parish");

            TextboxPage.submitButton.click();

            TextboxPage.fullNameResult.should("have.text", "Name:Test User Name");
            TextboxPage.emailResult.should("have.text", "Email:example@email.com");
            TextboxPage.currentAddressResult.should(
                "contain.text", 
                "Current Address :Riga, Azerbaijan street 18, Some parish");
            TextboxPage.pernamentAddressResult.should(
                "contain.text",
                "Permananet Address :Riga, Azerbaijan street 18, Some parish");
        });

        it("Enter field Values - negative test", () => {
            TextboxPage.userEmailField.should("not.have.class", "field-error")
            TextboxPage.userEmailField.type("notFull@email");
            TextboxPage.submitButton.click();
            TextboxPage.userEmailField.should("have.class", "field-error");

        });
    });

    context("Checkbox", () => {
        beforeEach(() => {
            CheckBoxPage.visit();
        });

        it("Enter checkbox values - positive test", () => {
            CheckBoxPage.expandButton.click();
            CheckBoxPage.checkBoxes.contains("Notes").click();
            CheckBoxPage.checkBoxes.contains("Angular").click();
            CheckBoxPage.checkBoxes.contains("Private").click();
            CheckBoxPage.checkBoxes.contains("Word File.doc").click();

            CheckBoxPage.chekcBoxesResult.should("contain.text", "notes");
            CheckBoxPage.chekcBoxesResult.should("contain.text", "angular");
            CheckBoxPage.chekcBoxesResult.should("contain.text", "private");
            CheckBoxPage.chekcBoxesResult.should("contain.text", "wordFile");
        });
    });

    context("Radio Buttons", () => {
        beforeEach(() => {
            RadioButtonPage.visit();
        });

        it("Click button - Yes", () => {
            RadioButtonPage.yesRadioButton.click();
            RadioButtonPage.yesRadioResult.should("have.text", "Yes");
        });

        it("Click button - Impressive", () => {
            RadioButtonPage.impressiveButton.click();
            RadioButtonPage.impressiveButtonResult.should("have.text", "Impressive");
        });

        it("Check disabled button - No", () => {
            RadioButtonPage.noButton.should("have.class", "disabled");
        });
    });

    context("Web Tables", () => {
        beforeEach(() => {
            WebTables.visit();
        });

        it("Create new table entry", () => {

            WebTables.addButton.click();
            WebTables.firstNameInput.type("Name");
            WebTables.lastNameInput.type("Lastname");
            WebTables.emailInput.type("test@email.com");
            WebTables.ageInput.type("30");
            WebTables.salaryInput.type("100");
            WebTables.departmentInput.type("Front Desk");
            WebTables.submitButton.click();

            WebTables.tableRows.should("contain.text", "Name");
            WebTables.tableRows.should("contain.text", "Lastname");
            WebTables.tableRows.should("contain.text", "test@email.com");
            WebTables.tableRows.should("contain.text", "30");
            WebTables.tableRows.should("contain.text", "100");
            WebTables.tableRows.should("contain.text", "Front Desk");

        });

        it("Delete rows & Validate", () => {
            WebTables.deleteBasedOnOption("Cierra").click();
            WebTables.deleteBasedOnOption("Alden").click();
            WebTables.deleteBasedOnOption("Kierra").click();

            WebTables.EmptyTableResult.should("have.text", "No rows found");
        });
    });
});
import { faker } from "@faker-js/faker";
export class Signup {
  elements = {
    getSignUpBtn: () => cy.get("button#signup"),
    getFirstNameInput: () => cy.get("input#firstName"),
    getLastNameInput: () => cy.get("input#lastName"),
    getEmailInput: () => cy.get("input#email"),
    getPassInput: () => cy.get("input#password"),
    getSubmitBtn: () => cy.get("button#submit"),
    getAddUserBtn: () => cy.get("button#add-contact"),
    getLogoutBtn: () => cy.get("button#logout"),
    getBodyTableContacts: () => cy.get('#myTable.contactTable-Body')
  };
  constructor() {
    const email = faker.internet.email();
    const password = faker.internet.password();
    this.firstName = "Ingrith";
    this.lastName = "Santamaria";
    this.email = email;
    this.password = password;
  }
  clickAndValidateSignUpButton = () => {
    this.elements.getSignUpBtn().should("be.visible").click();
    cy.url().should("contains", "addUser");
  };
  fillOutRegisterForm = () => {
    this.elements.getFirstNameInput().type(this.firstName);
    this.elements.getLastNameInput().type(this.lastName);
    this.elements.getEmailInput().type(this.email);
    this.elements.getPassInput().type(this.password);
    this.elements.getSubmitBtn().click();
  };
  clickAndValidateAddUserButton = () => {
    this.elements.getAddUserBtn().should("be.visible").click();
  };
  fillOutRegisterNewContact = (
    name,
    lastName,
    birthdate,
    email,
    phone,
    address,
    address2,
    city,
    state,
    postalCode,
    country
  ) => {
    cy.get("input#firstName").type(name);
    cy.get("input#lastName").type(lastName);
    cy.get("input#birthdate").type(birthdate);
    cy.get("input#email").type(email);
    cy.get("input#phone").type(phone);
    cy.get("input#street1").type(address);
    cy.get("input#street2").type(address2);
    cy.get("input#city").type(city);
    cy.get("input#stateProvince").type(state);
    cy.get("input#postalCode").type(postalCode);
    cy.get("input#country").type(country);
    cy.get("button#submit").click();
  };
  clickAndValidateLogout = () => {
    this.elements.getLogoutBtn().should('be.visible').click()
  }
  validateDataOnTable = () => {
    this.elements.getBodyTableContacts().should('not.be.empty')
  }
}

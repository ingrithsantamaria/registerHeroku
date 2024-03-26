import { Signup } from "../components/signup";
const signup = new Signup();
describe("template spec", () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it("User clicks on Sign up Button", () => {
    signup.clickAndValidateSignUpButton();
  });
  it("User clicks on Sign up Button", () => {
    signup.clickAndValidateSignUpButton();
    signup.fillOutRegisterForm();
  });
  it.only("Debería poder crear nuevos contactos con datos desde un CSV", () => {
    signup.clickAndValidateSignUpButton();
    signup.fillOutRegisterForm();
    signup.clickAndValidateAddUserButton();
    cy.task("parseCsv", {filePath: 'contacts.csv'}).then((contacts) => {
      contacts.forEach((contact) => {
        signup.fillOutRegisterNewContact(
          contact.name,
          contact.lastName,
          contact.birthdate,
          contact.email,
          contact.phone,
          contact.address1,
          contact.address2,
          contact.city,
          contact.state,
          contact.postalCode,
          contact.country
        );
        cy.wait(1000)
        signup.clickAndValidateAddUserButton()
      });
    });
  });
});

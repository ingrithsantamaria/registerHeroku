import { Signup } from "../components/signup";
import { Login } from "../components/login";
const login = new Login();
const signup = new Signup();
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("User clicks on Sign up Button", () => {
    signup.clickAndValidateSignUpButton();
  });
  it("User clicks on Sign up Button", () => {
    signup.clickAndValidateSignUpButton();
    signup.fillOutRegisterForm();
  });
  it("User should be able to create new contacts with data from a csv file ", () => {
    signup.clickAndValidateSignUpButton();
    signup.fillOutRegisterForm();
    signup.clickAndValidateAddUserButton();
    cy.task("parseCsv", { filePath: "contacts.csv" }).then((contacts) => {
      contacts.forEach((contact) => {
        signup.fillOutRegisterNewContact(
          contact.name,
          contact.lastName,
          contact.birthdate,
          contact.email,
          contact.phone,
          contact.address,
          contact.address2,
          contact.city,
          contact.state,
          contact.postalCode,
          contact.country
        );
        cy.wait(1000);
        signup.clickAndValidateAddUserButton();
      });
    });
  });
  it.only("Should show users created with mock in the home", () => {
    signup.clickAndValidateSignUpButton();
    signup.fillOutRegisterForm();
    signup.clickAndValidateLogout();
    cy.task("parseCsv", { filePath: "contacts.csv" }).then((contacts) => {
      cy.intercept(
        "GET",
        "https://thinking-tester-contact-list.herokuapp.com/contacts",
        contacts
      ).as("getContacts");
      console.log(contacts);
    });
    login.fillOutCredentials(signup.email, signup.password);
    signup.validateDataOnTable();
  });
});

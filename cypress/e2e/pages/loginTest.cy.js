import { Signup } from "../components/signup";
import { Login } from "../components/login";
const signup = new Signup();
const login = new Login();
describe("Should logn in and create user with csv file", () => {
  beforeEach(() => {
    cy.visit("/addUser");
  });
  it("Register User", () => {
    signup.fillOutRegisterForm();
    signup.clickAndValidateLogout();
    login.fillOutCredentials(signup.email, signup.password);
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
});

import { Signup } from "../components/signup";
import { Login } from "../components/login"
const signup = new Signup()
const login = new Login()
describe('template spec', () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it('Register User', () => {
    cy.visit('/addUser')
    signup.fillOutRegisterForm()
    signup.clickAndValidateLogout()
    login.fillOutCredentials(signup.email, signup.password)
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
  })
})
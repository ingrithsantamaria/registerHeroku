import { Signup } from "./signup";
const signup = new Signup()
export class Login {
  elements = {
    getEmailInput: () => cy.get("input#email"),
    getPassInput: () => cy.get("input#password"),
    getSubmitBtn: () => cy.get("button#submit")
  };
  fillOutCredentials = (email, password) => {
    this.elements.getEmailInput().type(email)
    this.elements.getPassInput().type(password)
    this.elements.getSubmitBtn().click()
}
}


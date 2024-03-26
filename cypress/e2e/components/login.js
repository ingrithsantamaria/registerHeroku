import { Signup } from "./signup";
const signup = new Signup()
export class Login {
  elements = {
    getEmailInput: () => cy.get("input#email"),
    getPassInput: () => cy.get("input#password"),
    getSubmitBtn: () => cy.get("button#submit")
  };
  fillOutCredentials = () => {
    this.elements.getEmailInput().type(signup.email)
    this.elements.getPassInput().type(signup.password)
    this.elements.getSubmitBtn().click()
}
}


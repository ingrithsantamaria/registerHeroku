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
    cy.visit('/login')
    login.fillOutCredentials()
  })

})
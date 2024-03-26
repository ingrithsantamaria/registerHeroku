Cypress.Commands.add('fillContactForm', (name, birthdate, email, phone, address, city, state, postalCode, country) => {
    cy.get('input#firstName').type(name);
    cy.get('input#birthdate').type(birthdate);
    cy.get('input#email').type(email);
    cy.get('input#phone').type(phone);
    cy.get('input#street1').type(address);
    cy.get('input#city').type(city)
    cy.get('input#stateProvince').type(state)
    cy.get('input#postalCode').type(postalCode)
    cy.get('input#country').type(country)
  });
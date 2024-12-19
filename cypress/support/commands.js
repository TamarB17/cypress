// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('HomePage', () => {
  cy.visit('http://automationexercise.com');
  cy.contains('Full-Fledged practice website for Automation Engineers').should(
    'be.visible'
  );
});

Cypress.Commands.add('registration', (userData) => {
  cy.get('.shop-menu > .nav > :nth-child(4)').click();
  cy.get('.signup-form > h2').should('have.text', 'New User Signup!');
  cy.get('[data-qa="signup-name"]').type(userData.name);
  cy.get('[data-qa="signup-email"]').type(userData.email);
  cy.get('[data-qa="signup-button"]').click();
  cy.get(':nth-child(1) > b').should('have.text', 'Enter Account Information');
  cy.get('#id_gender1').check();
  cy.get('[data-qa="name"]').should('have.value', userData.name);
  cy.get('[data-qa="email"]').should('have.value', userData.email);
  cy.get('[data-qa="password"]').type(userData.password);
  cy.get('[data-qa="days"]').select(userData.birthdate.day);
  cy.get('[data-qa="months"]').select(userData.birthdate.month);
  cy.get('[data-qa="years"]').select(userData.birthdate.year);
  cy.get('#newsletter').click();
  cy.get('#optin').click();
  cy.get('#first_name').type(userData.firstName);
  cy.get('#last_name').type(userData.lastName);
  cy.get('#company').type(userData.company);
  cy.get('#address1').type(userData.address1);
  cy.get('#address2').type(userData.address2);
  cy.get('#country').select(userData.country);
  cy.get('#state').type(userData.state);
  cy.get('#city').type(userData.city);
  cy.get('#zipcode').type(userData.zipcode);
  cy.get('#mobile_number').type(userData.mobileNumber);
  cy.get('[data-qa="create-account"]').click();
  cy.contains('Account Created!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
  cy.contains(`Logged in as ${userData.name}`).should('be.visible');
});

Cypress.Commands.add('login', (userData) => {
  cy.get('.shop-menu > .nav > :nth-child(4)').click();
  cy.contains('Login to your account').should('be.visible');
  cy.get('[data-qa="login-email"]').type(userData.email);
  cy.get('[data-qa="login-password"]').type(userData.password);
  cy.get('[data-qa="login-button"]').click();
  cy.contains(`Logged in as ${userData.name}`).should('be.visible');
});

Cypress.Commands.add('loginIncorrect', (userData) => {
  cy.get('.shop-menu > .nav > :nth-child(4)').click();
  cy.contains('Login to your account').should('be.visible');
  cy.get('[data-qa="login-email"]').type(userData.email);
  cy.get('[data-qa="login-password"]').type(userData.password);
  cy.get('[data-qa="login-button"]').click();
  cy.contains('Your email or password is incorrect!').should('be.visible');
});

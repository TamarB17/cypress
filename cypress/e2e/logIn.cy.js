describe('automation exercise tests', () => {
  it('Test Case 1: Register User', () => {
    // 1. Launch browser
    // 2. Navigate to URL 'http://automationexercise.com'
    cy.visit('http://automationexercise.com');

    // 3. Verify that home page is visible successfully
    cy.contains(
      'Full-Fledged practice website for Automation Engineers'
    ).should('be.visible');

    // 4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4)').click();

    // 5. Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should('have.text', 'New User Signup!');

    // 6. Enter name and email address
    cy.get('[data-qa="signup-name"]').type('tamo').should('have.value', 'tamo');
    cy.get('[data-qa="signup-email"]').type('t1@tamo.com');

    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(':nth-child(1) > b').should(
      'have.text',
      'Enter Account Information'
    );
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('#id_gender1').check();
    cy.get('[data-qa="name"]').should('have.value', 'tamo');
    cy.get('[data-qa="email"]').should('have.value', 't1@tamo.com');
    cy.get('[data-qa="password"]').type('12345678');
    cy.get('[data-qa="days"]').select('17');
    cy.get('[data-qa="months"]').select('November');
    cy.get('[data-qa="years"]').select('1989');

    // 10. Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').click();

    //11. Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').click();

    //12. Fill details: First name, Last name, Company, Address, Address2,
    //  Country, State, City, Zipcode, Mobile Number
    cy.get('#first_name').type('tamo');
    cy.get('#last_name').type('bendeliani');
    cy.get('#company').type('ITcompany');
    cy.get('#address1').type('street 2');
    cy.get('#address2').type('street 5');
    cy.get('#country').select('Canada');
    cy.get('#state').type('ontario');
    cy.get('#city').type('ontario');
    cy.get('#zipcode').type('1234');
    cy.get('#mobile_number').type('25369874');

    // 13. Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click();

    //14. Verify that 'ACCOUNT CREATED!' is visible
    cy.contains('Account Created!').should('be.visible');

    //15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click();

    //16. Verify that 'Logged in as username' is visible
    cy.contains('Logged in as tamo').should('be.visible');

    //17. Click 'Delete Account' button
    cy.get('.shop-menu > .nav > :nth-child(5)').click();

    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.get('[data-qa="account-deleted"]').should(
      'have.text',
      'Account Deleted!'
    );
    cy.get('[data-qa="continue-button"]').click();
  });
});

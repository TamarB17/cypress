describe('automation exercise tests', () => {
  it('Test Case 5: Register User with existing email', () => {
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

    //6. Enter name and already registered email address
    cy.get('[data-qa="signup-name"]').type('tamo');
    cy.get('[data-qa="signup-email"]').type('2@y.com');

    //7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();
    //8. Verify error 'Email Address already exist!' is visible
    cy.contains('Email Address already exist!').should('be.visible');
  });
});

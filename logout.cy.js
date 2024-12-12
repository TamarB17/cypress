describe('automation exercise tests', () => {
  it('Test Case 4: Logout User', () => {
    // 1. Launch browser
    // 2. Navigate to URL 'http://automationexercise.com'
    cy.visit('http://automationexercise.com');

    // 3. Verify that home page is visible successfully
    cy.contains(
      'Full-Fledged practice website for Automation Engineers'
    ).should('be.visible');

    // 4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4)').click();

    // 5. Verify 'Login to your account' is visible
    cy.get('.login-form > h2').should('have.text', 'Login to your account');

    // 6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type('2@y.com');
    cy.get('[data-qa="login-password"]').type('12345');

    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();

    // 8. Verify that 'Logged in as username' is visible
    cy.contains('Logged in as me').should('be.visible');

    // 9. Click 'Logout' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    // 10. Verify that user is navigated to login page
    cy.get('.login-form > h2').should('be.visible');
  });
});

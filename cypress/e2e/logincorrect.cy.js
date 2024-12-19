describe('automation exercise tests', () => {
  it('Test Case 2: Login User with correct email and password', () => {
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

    //6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type('2@pipa.com');
    cy.get('[data-qa="login-password"]').type('12345');

    //7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();

    // 8. Verify that 'Logged in as username' is visible
    cy.contains('Logged in as pipa').should('be.visible');

    //9. Click 'Delete Account' button
    cy.get('.shop-menu > .nav > :nth-child(5)').click();

    //10. Verify that 'ACCOUNT DELETED!' is visible
    cy.get('[data-qa="account-deleted"]').should(
      'have.text',
      'Account Deleted!'
    );
  });
});

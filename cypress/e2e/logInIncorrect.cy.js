describe('automation exercise tests', () => {
  it('Test Case 3:  Login User with incorrect email and password', () => {
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

    // 6. Enter incorrect email address and password

    cy.get('[data-qa="login-email"]').type('2bbnm@y.com');
    cy.get('[data-qa="login-password"]').type('0000');

    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();

    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});

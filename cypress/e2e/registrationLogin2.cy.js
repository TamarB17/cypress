import userData from '../fixtures/userDataReg.json';
describe('Automation Tests', () => {
  it('Test Case 1: Register User', () => {
    cy.HomePage();

    cy.registration(userData);
  });
});

// describe('Automation Tests', () => {
//   it('Test Case 2: Login User with correct email and password', () => {
//     cy.HomePage();

//     cy.login(userData);
//   });
// });
// import userData from '../fixtures/wrongDatalog.json';
// describe('Automation Tests', () => {
//   it('Test Case 3: Login User with incorrect email and password', () => {
//     cy.HomePage();

//     cy.loginIncorrect(userData);
//   });
// });

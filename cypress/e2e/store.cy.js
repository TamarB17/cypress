describe('automation test store', () => {
  it('registration', () => {
    cy.visit('https://automationteststore.com');

    // cy.Registration('newusername1616');

    //login
    cy.login('newusername1616');

    //Edit account details
    //1.დააჭირე ღილაკს Edit account details
    cy.get('.side_account_list > :nth-child(3) > a').click();
    cy.contains('My Account Information').should('be.visible');
    cy.get('#AccountFrm_firstname').clear();
    cy.get('#AccountFrm_firstname').type('harry');
    cy.get('#AccountFrm_lastname').clear();
    cy.get('#AccountFrm_lastname').type('potter');
    cy.get('#AccountFrm_email').clear();
    cy.get('#AccountFrm_email').type('harrypotter@gmail.com');
    cy.get('#AccountFrm_telephone').clear();
    cy.get('#AccountFrm_telephone').type('616161');
    cy.get('#AccountFrm_fax').clear();
    cy.get('#AccountFrm_fax').type('569');
    cy.get('.col-md-12 > .btn-orange').click();
    cy.get('.subtext').should('have.text', 'harry');
    cy.contains('our account has been successfully updated.').should(
      'be.visible'
    );

    //არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება
    cy.get('.nav-dash > :nth-child(3) > a').click();
    cy.get('tr > .pull-right > .btn').click();
    cy.get('#AddressFrm_address_1').clear();
    cy.get('#AddressFrm_address_1').type('privet drive');
    cy.get('#AddressFrm_city').clear();
    cy.get('#AddressFrm_city').type('little whinging');
    cy.get('#AddressFrm_country_id').select('United Kingdom');
    cy.get('#AddressFrm_zone_id').select('Surrey');
    cy.get('#AddressFrm_postcode').clear();
    cy.get('#AddressFrm_postcode').type(5693);
    cy.get('.col-md-12 > .btn-orange').click();
    cy.contains(' Your address has been successfully updated').should(
      'be.visible'
    );

    //პაროლის შეცვლა
    cy.get('.side_account_list > :nth-child(4) > a').click();
    cy.get('#PasswordFrm_current_password').type('newusername1616');
    cy.get('#PasswordFrm_password').type('harrypotter');
    cy.get('#PasswordFrm_confirm').type('harrypotter');
    cy.get('.col-md-12 > .btn-orange').click();
    cy.contains('Your password has been successfully updated').should(
      'be.visible'
    );
  });
});

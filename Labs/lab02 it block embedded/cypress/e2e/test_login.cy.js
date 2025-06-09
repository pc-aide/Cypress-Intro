describe('Application Tests with Session', () => {
  // login
  beforeEach(() => {
    cy.session('loginSession', () => {
      cy.visit('/', { failOnStatusCode: false });
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
    });
    cy.visit('/inventory.html', { failOnStatusCode: false });
  });

  it('Checkup on url redirect auto inventory page', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.app_logo').should('be.visible').and('contain', 'Swag Labs');
  });

  it('Click on btn', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });
});

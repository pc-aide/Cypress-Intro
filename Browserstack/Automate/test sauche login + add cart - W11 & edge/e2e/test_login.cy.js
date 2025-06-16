describe('Application Tests with Session', () => {
  // Définition de la session pour le login
  beforeEach(() => {
    cy.session('loginSession', () => {
      cy.visit('/', { failOnStatusCode: false });
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
    });
    cy.visit('/inventory.html', { failOnStatusCode: false });
    cy.url().should('include', '/inventory.html');
  });

  it('Checkup on url redirect auto inventory page', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.app_logo').should('be.visible').and('contain', 'Swag Labs');
  });

  it('Clique sur un bouton', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });
});

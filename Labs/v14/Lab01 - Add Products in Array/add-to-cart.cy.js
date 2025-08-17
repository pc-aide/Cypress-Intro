describe('Adding items to the cart', () => {
  it('should add all products to the cart, if any', () => {
    // var mutable
    let products: HTMLElement[] = [];

    cy.visit('http://localhost:4200');
    cy.get('.product-card').then(($el) => {
      products = $el.toArray();
      // The entire IF block needs to be inside the 'then' part
      if (products.length) {
        cy.wrap(products).each(product => {
          cy.wrap(product).within(() => cy.get('.add-to-cart').click());
        });
        cy.get('a[href="/cart"] span').should('have.text', `Cart (${products.length})`);
      } else {
        cy.get('.product-card').should('have.length', 0);
      }
    });
  });
});

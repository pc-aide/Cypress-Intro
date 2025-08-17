describe('add product in Array', () => {
    it('add products in Array', () => {
        // var mutable
        let products = [];

        cy.visit('http://192.168.1.28:4200');
        // 
        cy.get('.product-card').then(($el) => {
            products = $el.toArray();
            // the entire if block needs to be inside the 'then' part
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

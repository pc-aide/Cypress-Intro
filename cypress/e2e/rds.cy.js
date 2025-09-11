describe('Visit RDS', () => {
  it('should visit rds.ca and take a screenshot', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      // ignore all uncaught exceptions
      return false;
    });
    cy.visit('https://accweb-01-20432.mouvdev.desjardins.com/identifiantunique/securite-garantie');
  });
});

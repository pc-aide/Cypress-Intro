describe('Visit RDS', () => {
  it('should visit rds.ca and take a screenshot', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      // ignore all uncaught exceptions
      return false;
    });
    cy.visit('https://rds.ca');
    cy.screenshot('rds-homepage');
  });
});

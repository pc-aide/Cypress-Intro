describe('Visit RDS', () => {
  it('should visit rds.ca and take a screenshot', () => {
    cy.visit('https://rds.ca');
    cy.screenshot('rds-homepage');
  });
});

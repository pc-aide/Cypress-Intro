# Folders

---

## List
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|fixtures|<ins>It's used to store data</ins><br/>1. Reusable parameters<br/>2. Separating data from code – a best practice<br/>3. Read `.json` file with `cy.fixture()`<br/>&ensp;`cy.fixture()` Load a data file, here `creds_login.json`, from `cypress/fixtures`|cypress/fixtures/`creds_login.json`<br/>`{`<br/>`    "__comment" : "your comments here",`<br/>`    "userName" : "jackLast101",`<br/>`    "password" : "password$123.-"`<br/>`}`<br/><br/>cypress/e2e/`login.cy.js`<br/>`describe('test param usr-pwd', () => {`<br/>`  //`<br/>`  beforeEach(() => {`<br/>`    // Load the cypress/fixtures/creds_login.json`<br/>`    cy.fixture('creds_login').as('credentials');`<br/>`  });`<br/>`  `<br/>`  // Test individual & isolated`<br/>`  it('test param usr-pwd', function () {`<br/>`   // Visit the website login`<br/>`    cy.visit('https://practicetestautomation.com/practice-test-login/');`<br/>` `<br/>`    // PopUp to agreed Cookies`<br/>`    cy.get('#accept-btn').click();`<br/>` `<br/>`    // Enter usr`<br/>`    cy.get('#userID2031').type(this.credentials.userName);`<br/>` `<br/>`    // Enter pwd`<br/>`    cy.get('#PwdID734').type(this.credentials.password);`<br/>`  });`<br/>`});`|

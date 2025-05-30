# Folders

---

## List
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|fixtures|<ins>It's used to store data</ins><br/>1. Reusable parameters<br/>2. Separating data from code – a best practice<br/>3. Read `.json` file with `cy.fixture()`<br/>&ensp;`cy.fixture()` Load a data file, here `creds_login.json`, from `cypress/fixtures`|cypress/fixtures/`creds_login.json`<br/>`{`<br/>`  "userName": "sammeFort",`<br/>`  "password": "pass$owrd."`<br/>`}`<br/><br/>cypress/e2e/`login.cy.js`<br/>`{`<br/>`    "__comment" : "your comments here",`<br/>`    "userName" : "jackLast101",`<br/>`    "password" : "password$123.-"`<br/>`}`|

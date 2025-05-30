# terminology

---

## List
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|scripts|scripts is a `package.json` property that gives a user the ability to run commands via the command line in JavaScript apps|before:<br/><img src="https://i.imgur.com/MRDIBzB.png"><br/>script:<br/><img src="https://i.imgur.com/LB35grJ.png"><br/>test<br/>`npm run open`<br/><img src="https://i.imgur.com/SkcZcK1.png">|
|2|Same-origin Examples||`it("navigates", () => {`<br/>`  cy.visit("https://apple.com");`<br/>`  cy.visit("https://facebook.com"); // this will throw an error`<br/>`});`<br/><br/>`// move visit to a different origin to another test`<br/>`it("navigates", () => {`<br/>`  cy.visit("https://apple.com"); // works`<br/>`});`<br/><br/>`it("navigates to new origin", () => {`<br/>`  cy.visit("https://facebook.com"); // works`<br/>`});`|
|4|Tripple-Slash Directive||`/// <reference types="cypress" />`|<img src="https://i.imgur.com/Jqiv11Y.png">|
|5|Commands Cypress||`cy.visit("URL")`<br/><br/>`cy.get("h1").contains("View Sessions").click();`<br/><br/>`cy.url().should("include", "/sessions");`|
|6|Hooks||`before(() => {`<br/>`  // root-level hook`<br/>`  // runs once before all tests`<br/>`});`<br/><br/>`beforeEach(() => {`<br/>`  // root-level hook`<br/>`  // runs before every test block`<br/>`});`<br/><br/>`afterEach(() => {`<br/>`  // runs after each test block`<br/>`});`<br/><br/>`after(() => {`<br/>`  // runs once all tests are done`<br/>`});`|
|7|describe|Group together||<img src="https://i.imgur.com/CDVdA9L.png">|
|8|Test Runner|
|9|Mocha|underlying test framework|

# Commands

---

## List
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|visit||`cy.visit('https://google.com/')`|
|2|get||`cy.get('.class')`|find out the class from the DOM<br/><img src="https://i.imgur.com/54rimkh.png">|
|3|type||`cy.get('.class').type('1234')`<br/><br/>`// Timeout : value in milliseconds`<br/>`cy.get('.className', {timeout:5000}).type('Automation Step by Step{enter}')`|
|4|click||`cy.get('.class').click()`|
|5|contains||`cy.contains('Google Search').click()`|
|6|wait|milliseconds|`cywait(2000)`<br/><br/><ins>wait for API request/response</ins><br/>`// Specify the request`<br/>`cy.intercept('GET', '/api/data').as('getData');`<br/>` `<br/>`// Trigger the action that makes the API request`<br/>`cy.get('button').click();`<br/>` `<br/>`// Wait for the API response to resolve`<br/>`cy.wait('@getData').its('response.statusCode').should('eq', 200);`|<img src="https://i.imgur.com/T4CU4uw.png">|

---

## Parent Commands
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1||Parent commands begin a new chain of Cypress command|`cy.visit(/conference");`<br/>`cy.get("h1");`<br/>`cy.request("http://dev.local/seed");`<br/>`cy.exec("npm run build");`<br/>`cy.intercept("/users/**");`||

---

## Child Commands
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1||Chained off a parent command, or another child command|`cy.get("[data-cy=speakerProfile]").click();`<br/>`ci.get("[data-cy=sessionTitle]").type("My new session");`<br/>`cy.get(".conference").find("footer");`<br/>`cy.contains("ul", "room number").should("be.visible");`<br/>`cy.get("footer").scrollIntoView();`<br/>`cy.get("form").submit();`|

---

## Dual Commands
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1||Can either start a chain or be chained off an existing one|`cy.contains()`<br/>`cy.screenshot()`<br/>`cy.wait()`|

---

## Assert

### Implicit 
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|radioBtn||`cy.get('#radio-section', { timeout: 10000 })`<br/>`  .should('be.visible') // wait the frame/div`<br/>`  .within(() => {`<br/>`    cy.get('input[type="radio"][value="yes"]')`<br/>`      .should('be.visible')`<br/>`      .check()`<br/>`      .should('be.checked')`<br/>`  });`|

### viewport
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|`cy.viewport(width, height)`||`cy.viewport(1366, 768);`<br/><br/>`cy.viewport(preset, orientation)`<br/>`cy.viewport('iphone-x', 'portrait')`<br/>`cy.viewport('iphone-x', 'landscape')`|

---


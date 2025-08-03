# v13

---

## doc
[assertions](https://docs.cypress.io/app/references/assertions)

---

## debug
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|pause||`cy.visit('http://localhost:4200/shipping').pause();`|<img src="https://i.imgur.com/vT3YAui.png">|

---

## Assert implicit
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|url||`cy.url().should('include','/sessions');`<br/><br/><ins>.then() with try/catch - soft assert</ins><br/>`cy.url().then((url) => {`<br/>`  try {`<br/>`    expect(url).to.include('/session');`<br/>`  } catch (err) {`<br/>`    // Log err but continue the execution`<br/>```     cy.log(`SOFT ASSERT ERROR: ${error.message}`); ```<br/>`  }`<br/>`});`<br/>` `<br/>`// next cypress commands`<br/>`cy.get('input[name="username"]').type('admin');`
|2|get||`cy.get('[id=username]').should('be.visible');`|

### Visibility
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|||// retry until the element with <br>// data-testid "form-submit" is visible <br>`cy.get('[data-testid="form-submit"]').should('be.visible')`<br/><br/>// retry until the list item with<br/>// text "write tests" is visible<br/>`cy.contains('[data-testid="todo"] li', 'write tests').should('be.visible')`<br/><br/>// retry until EVERY element is invisible<br/>`cy.get('li.hidden').should('not.be.visible')`|

### Existence
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|||// retry until loading spinner no longer exists<br/>`cy.get('[data-testid="loading"]').should('not.exist')`

### Negative assertions
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|||`cy.get('[data-testid="loading"]').should('not.be.visible')`

### Multiple assertions
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|||// ⛔️ DOES NOT WORK<br/>`cy.get('[data-testid="loading"]').should('be.visible').and('not.be.visible')`<br/><br/>// ✅ THE CORRECT WAY<br/>`cy.get('[data-testid="loading"]').should('be.visible')`<br/>`cy.get('[data-testid="loading"]').should('not.be.visible')`

---

## Assert explicit

---

## cy.get(selector)
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|<ins>Selector CSS\eg:</ins><br/>1. jQuery||`cy.get('#inputTitle').type('New session title');`<br/><br/>avoid wait fix:<br/>`cy.get().should('be.visible')`<br/><br/>webLogic login:<br/>`cy.get('input[name="j_username"]').type('admin');`<br/>`cy.get('input[name="j_password"]').type('pass123');`<br/>`cy.get('button[type="submit"]').click();`<br/><br/>assert:<br/>`cy.get('input[name="j_username"]').should('be.visible').type('admin');`|<img src="https://i.imgur.com/zwu4XLQ.png">|

---

## child commands
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|click()|avoid `.submit()`:<br/>bypass click btn from std user e2e|`cy.get('form').submit();`<br/><br/>best choice to e2e:<br/>`cy.get('.btn').click();`|

--

## Intercept
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|cy.intercept()|**Spying** & stubbing<br/>backend with `cy.intercept()`|`cy.intercept(`<br/>`  {`<br/>`    method: 'GET',        // Intercept all HTTP GET requests`<br/>`    url: '/users/*',      // Match any URL that starts with /users/`<br/>`  },`<br/>`  []                       // Force the response to be an empty array`<br/>`).as('getUsers')           // Assign an alias to this intercept`<br/><br/>`// we set the response to be the activities.json fixture`<br/>`cy.intercept('GET', '/activities/*', { fixture: 'activities.json' })`<br/><br/><ins>Waiting</ins><br/>`// Intercept the GET request to /activities/* and respond with the activities fixture`<br/>`cy.intercept("/activities/*", { fixture: "activities" }).as("getActivities");`<br/>` `<br/>`// Intercept the GET request to /messages/* and respond with the messages fixture`<br/>`cy.intercept("/messages/*", { fixture: "messages" }).as("getMessages");`<br/>` `<br/>`// Visit the dashboard page, which will trigger requests to /activities/* and /messages/*`<br/>`cy.visit("http://localhost:8888/dashboard");`<br/>` `<br/>`// Wait for both intercepted routes to complete before moving on`<br/>`cy.wait(["@getActivities", "@getMessages"]);`<br/>` `<br/>`// Now assert that the page contains an <h1> with the text "Dashboard"`<br/>`cy.get("h1").should("contain", "Dashboard");`|

---

## Custom command
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|||`Cypress.Commands.add('clickViewSessions', () => {`<br/>`  cy.visit('/conference');`<br/>`  cy.get('h1').contains('View Sessions').click();`<br/>`});`|<img src="https://i.imgur.com/YtDv6db.png">|

# v13

---

## doc
[assertions](https://docs.cypress.io/app/references/assertions)

---

## viewport
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|<ins>default:</ins><br/>1000x660|||<imgs src="https://i.imgur.com/tJc9ria.png">|
|2|preset||<img src="https://i.imgur.com/YRJtoMP.png">|


---

## debug
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|pause||`cy.visit('http://localhost:4200/shipping').pause();`|<img src="https://i.imgur.com/vT3YAui.png">|

---

## type
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|type||`blur()` skip the focus on the field, like a tab key<br/>`cy.get('#phone').type(faker.phone.number()).blur();`|

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
|2|1. Suggested selector (Test Runner)<br/>or<br/>2. select element (modeDev) ?||ex :<br/>`# option 1 - from suggested selector Test Runner`<br/>cy.get('[data-cy="product-card-waterwall-wooden-toy"] > .card-content > .add-to-cart').click();<br/><br/>`# option 2 - select element ModDev`<br/>cy.get('div[data-cy="product-card-waterwall-wooden-toy"] .add-to-cart').click();<br/><br/><details><summary>Answer</summary><ins>option 2 : </ins>Less fragile : you’re just saying “inside this `div` marked with `data-cy`, find `.add-to-cart`”.<br/>If the internal structure changes a bit (for example, `.card-content` disappears), the test will still work.<br/>Closer to best practices: Cypress (and the Pluralsight course you mentioned) recommends relying mainly on `data-*` attributes instead of using a deep CSS structure.<br/></details>	|<img src="https://i.imgur.com/t034khg.png">|
|3|timeout|default 4 sec|`cy.get('h2[data-cy="order-status"]', { timeout : 7000 }).should('have.text', 'Your order has been successfully created!');`|<img src="https://i.imgur.com/3nvIfKS.png">|
|4|||`// Go to the cart page`<br/>`cy.get('a[href="/cart"]').click();`<br/><br/>`// href* wildcard`<br/>`cy.get('a[href*="/cart"]').should('be.visible').click();`|

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
|2||`describe('The order list', () => {`<br/>` `<br/>`    beforeEach(() => {`<br/>`         cy.intercept('GET','api/orders', {`<br/>`            fixture: 'orders.json'`<br/>`        }).as('getOrders');`<br/>` `<br/>`        cy.visit('http://192.168.1.28:4200/orders');`<br/>`    });`<br/>` `<br/>`    it('Should show all orders', () => {`<br/>`        // wait to cy.intercept('GET','api/orders')`<br/>`        cy.wait('@getOrders');`<br/>`        cy.get('[data-cy="orders-table"] tbody tr').eq(0).get('td').eq(4).should('have.text', 'DELIVERED');`<br/>`    });`<br/>`});`|<img src="https://i.imgur.com/veBRsr2.png">|

---

## Custom command
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|||`Cypress.Commands.add('clickViewSessions', () => {`<br/>`  cy.visit('/conference');`<br/>`  cy.get('h1').contains('View Sessions').click();`<br/>`});`|<img src="https://i.imgur.com/YtDv6db.png">|

---

## Hooks
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|before|Cleaning up before Test|`beforeEach(() => {`<br/>`    // Code to run once before all tests`<br/>`});`<br/><br/><ins>create-order.cy.js</ins><br/>`    before(() => {`<br/>`        // clear list of orders`<br/>`        cy.request('http://192.168.1.28:8080/api/orders').then(response => {`<br/>`            cy.wrap(response.body).each((order) => {`<br/>`                const orderId = order.id;`<br/>``                cy.request('DELETE', `http://192.168.1.28:8080/api/orders/${orderId}`);``<br/>`            })`<br/>`        })`<br/>`    });`|<img src="https://i.imgur.com/OFyEwlA.png">|
|2|beforeEach||`beforeEach(() => {`<br/>`    // Code to run before each test`<br/>`});`<br/><br/><ins>create-order.cy.js</ins><br/>`    beforeEach(() => {`<br/>`        cy.visit('http://192.168.1.28:4200');`<br/>` `<br/>`        // Generate & enter shipping information`<br/>`        cy.generateRandomShippingInformation().as('shippingInfo');`<br/>`    });`|<img src="https://i.imgur.com/gdm3yLc.png">|
|3|afterEach||`afterEach(() => {`<br/>`    // Code to run after each test`<br/>`});`|
|4|after||`after(() => {`<br/>`    // Code to run once after all tests`<br/>`});`|

---

## document
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|cy.document|DOM|`        cy.window().then((win) => {`<br/>`        const timing = win.performance.timing`<br/>`        const domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart`<br/>``      cy.log(`DOMContentLoaded a pris ${domContentLoaded} ms`)``<br/>`        })`<br/>`       // DOM is ready ?`<br/>`       cy.document().its('readyState').should('eq', 'complete');`|<img src="https://i.imgur.com/s0wzM7L.png">|

---

## clock
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|cy.clock||`cy.clock(); // i want to control the time`<br/>`cy.visit('your-app-url')`<br/>`cy.tick(5000);  // if your app have setTimeout(() => { ... }, 5000) - dont' need realy 5sec with cy.tick(5000)`|

---

## log
|n|name|desc|e.g.|O/P|
|-|----|---|----|---|
|1|cy.log||`cy.log('Adding a product to the cart...');`<br/><br/>`cy.get('.add-to-cart').first().click({ log: false });`<br/><br/>cypress.config.js<br/>`  e2e: {`<br/>`    setupNodeEvents(on, config) {`<br/>`      // implement node event listeners here`<br/>`      on('task', {`<br/>`        log(message) {`<br/>`          console.log(message)`<br/>`          return null`<br/>`        }`<br/>`      })`<br/><br/>orders.cy.js<br/>`cy.task('log', 'One order delivered - console log');`|<img src="https://i.imgur.com/uvOgk1v.png">|

---

## err - new url
````js
// cypress/support/e2e.js
beforeEach(() => {
  cy.on('url:changed', (newUrl) => {
    if (newUrl.includes('err')) {
      throw new Error(`❌ Redirection erreur détectée : ${newUrl}`);
    }
  });
});

// spec
it('fait une action qui casse', () => {
  cy.visit('/dashboard');
  cy.get('#btn-casser').click(); 
  // si l’appli redirige vers /accueil?err=123 → 
  // ton listener capte ça et le test échoue direct
});
````

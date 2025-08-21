# plugins

---

## doc
* https://docs.cypress.io/app/plugins/plugins-list
* https://www.npmjs.com/package/concurrently

---

## cypress-split
````shell
# install
npm i cypress-split
````
* cypress.config.js
````js
import { defineConfig } from "cypress";
import * as cypressSplit from "cypress-split";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      return config;
    }
  },
});
````

---

## mocha-junit-reporter
````shell
# install
npm i mocha-junit-reporter --save-dev
````

---

## 
```shell
# install
npm i cypress-log-to-output
````

* eg test
````js
it('test login', () => {
  cy.log("Start login process");
  cy.visit("/login");
  cy.get("#username").type("admin");
  cy.log("Entered username");
  cy.get("#password").type("1234");
  cy.log("Entered password");
  cy.get("button[type=submit]").click();
  cy.log("Login test finished");
});
````

* console
````shell
cy:log Start login process
cy:log Entered username
cy:log Entered password
cy:log Login test finished
````

* O/P
````shell
npx cypress run > logs.txt
````

# plugins

---

## doc
* https://docs.cypress.io/app/plugins/plugins-list

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

# v1

---

## install
````ps1
npm i cypress-junit-reporter
````

---

## cypress.config.js
````js
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    // Further configuration omitted...
    reporter : 'junit',
    reporterOptions: {
      mochaFile: 'cypress/results/[hash].xml',
    },
  },
});
````

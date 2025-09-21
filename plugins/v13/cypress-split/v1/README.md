# v1

---

## Install
````ps1
npm i -D cypress-split
````

---

## cypress.config.js
````js
// cypress.config.js
const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },
})
````

<img src="https://i.imgur.com/dVXElfm.png">

---

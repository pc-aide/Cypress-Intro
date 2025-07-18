# npx

---

## Commands
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|open|npx is used to execute npm package binaries & comes with all npm versions from version 5.2|`npx cypress open`|<img src="https://i.imgur.com/RwAgBbx.png">|
|2|version||`npx cypress version`|<img src="https://i.imgur.com/57kD8wu.png">|
|3|verify||`npx cypress verify`|<img src="https://i.imgur.com/Uh74JfY.png">|
|4|run||`# electron default`<br/>`npx cypress run --spec .\cypress\e2e\get_mfa_sms.cy.js`<br/><br/>`npx cypress run --browser chrome --spec .\cypress\e2e\get_mfa_sms.cy.js`<br/><br/>`cypress.config.js`<br/>`const { defineConfig } = require('cypress')`<br/>` `<br/>`module.exports = defineConfig({`<br/>`  e2e: {`<br/>`    setupNodeEvents(on, config) {`<br/>`      // You can add plugins or event handlers here`<br/>`    },`<br/>`    baseUrl: 'http://localhost:3000',`<br/>`    video: true, // ✅ Enable video recording`<br/>`  }`<br/>`})`||

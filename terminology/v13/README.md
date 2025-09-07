# terminology

---

## List
|n|name|desc|eg|O/P|
|-|----|----|--|---|
|1|Selectors|<ins>Cypress wil auto calculate a unique selector to use **targeted element**</ins><br/>1. data-cy, data-test, data-tesid<br/>2. id, class,tag,attributes,nth-child<br/><br/><ins>Best selectors to try first</ins><br/>1. `data-*`<br/>Why :<br/>&ensp;a. Stable - not affected by CSS or loading visuals<br/>&ensp;b. independent of DOM - not `.parent .child:nth-child(2)`<br/>Officially recommended by Cypress<br/><br/>2. `id`|`data-cy="username-input"`<br/>`data-test="submit-btn"`<br/><br/>``|
|2|Test Optimization|1. 🚦 Flaky tests<br/>2. ⏱️ Long execution time<br/>3. 🛠️ Long maintenance time<br/>4. 🧩 The setup is complex<br/>5. ♻️ Poor reusability<br/>6. 👤🔑 Poor logging<br/>7. 🅐 Ⓑ Lack of test independence<br/>8. ⏳ Overuse of hard waits<br/><br/>Test results need to be reliable||<img src="https://i.imgur.com/AuTBBgz.png">|
|3|Mocha|<ins>Framework</ins><br/><br/><ins>it block</ins><br/>Test Case individual<br/>`it('test case', () => {`<br/>`    // cypress command here`<br/>`});`<br/><br/>it.only - run only this block<br/><br/>it.skip||<img src="https://i.imgur.com/JdODL0S.png"><br/>it.only : <br/><img src="https://i.imgur.com/L7Iehyk.png"><br/>it.skip : <br/><img src="https://i.imgur.com/ybrAKIB.png">|
|4|Timeouts|Command vs Global Timeouts|login.cy.js<br/>`cy.get('input[name="username"]', { timeout: 8000 }).type('testUser');`<br/><br/>cypress.config.js<br/>`{`<br/>`  "defaultCommandTimeout": 8000,`<br/>`  "pageLoadTimeout": 100000,`<br/>`  "requestTimeout": 10000,`<br/>`  "responseTimeout": 12000,`<br/>`  "taskTimeout": 10000,`<br/>`  "execTimeout": 15000`<br/>`}`
|5|Test Reporters|
|6|CLI arg|Overrides any config or environent variables|--config & --env flags<br/>`npx cypress run --env logo=1,option2=2 --config retries=0`<br/><br/>`describe('Login',`<br/>`{`<br/>`  env: {`<br/>`    email: "overridden@contoso.com"`<br/>`  }`<br/>`},`<br/>`() => {`<br/>`  it('Enter the e-mail address', () => {`<br/>`    cy.get('input[placeholder="Email"]')`<br/>`      .type(Cypress.env('email'));`<br/>`  });`<br/>`});`||
|7|Resolving Cypress Configuration|||<img src="https://i.imgur.com/pylzFMQ.png"><br/>cypress.config() vs cypress.env()<br/><img src="https://i.imgur.com/skIAjQl.png">|

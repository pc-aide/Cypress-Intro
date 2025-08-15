v14

---

## FORCE_FIREFOX_CDP
````ps1
# irefox v135+ with WebDriver BiDi
$env:FORCE_FIREFOX_CDP="1"
npx cypress open --browser firefox
````

### checkUp
````js
// cypress/e2e/check-env.cy.js
describe('Check FORCE_FIREFOX_CDP', () => {
  it('should display env var', () => {
    console.log('FORCE_FIREFOX_CDP value:', process.env.FORCE_FIREFOX_CDP);
  });
});
````

### O/P

---

## debug
````ps1
$env:DEBUG="cypress:launcher"; $env:FORCE_FIREFOX_CDP="1"; npx cypress open --browser firefox
````

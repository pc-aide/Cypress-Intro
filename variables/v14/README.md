v14

---

## firefox v135+ with WebDriver BiDi
````ps1
$env:FORCE_FIREFOX_CDP="1"
npx cypress open --browser firefox
````

## checkUp
````js
// cypress/e2e/check-env.cy.js
describe('Check FORCE_FIREFOX_CDP', () => {
  it('should display env var', () => {
    console.log('FORCE_FIREFOX_CDP value:', process.env.FORCE_FIREFOX_CDP);
  });
});
````

## O/P

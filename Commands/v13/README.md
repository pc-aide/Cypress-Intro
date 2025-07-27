# v13

---

## doc
[assertions](https://docs.cypress.io/app/references/assertions)

---

## Assert implicit
|n|name|dsc|e.g.|O/P|
|-|----|---|----|---|
|1|url||`cy.url().should('include','/sessions');`<br/><br/><ins>.then() with try/catch - soft assert</ins><br/>`cy.url().then((url) => {`<br/>`  try {`<br/>`    expect(url).to.include('/session');`<br/>`  } catch (err) {`<br/>`    // Log err but continue the execution`<br/>```     cy.log(`SOFT ASSERT ERROR: ${error.message}`); ```<br/>`  }`<br/>`});`<br/>` `<br/>`// next cypress commands`<br/>`cy.get('input[name="username"]').type('admin');`
|2|get||`cy.get('[id=username]').should('be.visible');`|

---

## Assert explicit

---

## cy.get(selector)
|n|name|dsc|e.g.|O/P|
|-|----|---|----|---|
|1|<ins>Selector CSS\eg:</ins><br/>1. jQuery||`cy.get('#inputTitle').type('New session title');`<br/><br/>avoid wait fix:<br/>`cy.get().should('be.visible')`<br/><br/>webLogic login:<br/>`cy.get('input[name="j_username"]').type('admin');`<br/>`cy.get('input[name="j_password"]').type('pass123');`<br/>`cy.get('button[type="submit"]').click();`<br/><br/>assert:<br/>`cy.get('input[name="j_username"]').should('be.visible').type('admin');`|<img src="https://i.imgur.com/zwu4XLQ.png">|

---

## child commands
|n|name|dsc|e.g.|O/P|
|-|----|---|----|---|
|1|click()|avoid `.submit()`:<br/>bypass click btn from std user e2e|`cy.get('form').submit();`<br/><br/>best choice to e2e:<br/>`cy.get('.btn').click();`|

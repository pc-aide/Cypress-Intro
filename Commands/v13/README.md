# v13

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
|1|<ins>Selector CSS\eg:</ins><br/>1. jQuery||`cy.get('#inputTitle').type('New session title');`<br/>avoid wait fix:<br/>`cy.get().should('be.visible')`|<img src="https://i.imgur.com/zwu4XLQ.png">|

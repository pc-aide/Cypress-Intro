# Commands

---

## Parent Commands
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1||Parent commands begin a new chain of Cypress command|`cy.visit(/conference");`<br/>`cy.get("h1");`<br/>`cy.request("http://dev.local/seed");`<br/>`cy.exec("npm run build");`<br/>`cy.intercept("/users/**");`||

---

## Child Commands
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1||Chained off a parent command, or another child command|`cy.get("[data-cy=speakerProfile]").click();`<br/>`ci.get("[data-cy=sessionTitle]").type("My new session");`<br/>`cy.get(".conference").find("footer");`<br/>`cy.contains("ul", "room number").should("be.visible");`<br/>`cy.get("footer").scrollIntoView();`|

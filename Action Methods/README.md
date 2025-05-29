# Action Methods

---

## List
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|check|It checks radio buttons or checkboxes & is applied to elements having input tags|`cy.get('.chkbox').check()`|
|request|Request is typically used for api request but can be used to check any url instead of visit function|`cy.request('url')`|
|visit|visit test url|`cy.visit('url')`|
|type|Enter typed value in text box|`cy.get(.classname).type('text to be typed')`|
|click|click button or tap on any element in dom|`cy.get('#txt').click()`|
|go|It moves forward or backward to the next or previous url in browser history|`cy.go('back')`or<br/>`cy.go('forward')`|

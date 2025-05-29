# Action Methods

---

## List
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|check|It checks radio buttons or checkboxes & is applied to elements having input tags|`cy.get('.chkbox').check()`|
|2|request|Request is typically used for api request but can be used to check any url instead of visit function|`cy.request('url')`|
|3|visit|visit test url|`cy.visit('url')`|
|4|type|Enter typed value in text box|`cy.get(.classname).type('text to be typed')`|
|5|click|click button or tap on any element in dom|`cy.get('#txt').click()`|
|6|go|It moves forward or backward to the next or previous url in browser history|`cy.go('back')`<br/>or<br/>`cy.go('forward')`|

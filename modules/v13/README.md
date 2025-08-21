# v13

---

## List
|n|name|desc.|e.g.|O/P|
|-|----|-----|----|---|
|1|npm i @faker-js/faker||`import { faker } from '@faker-js/faker';`<br/><br/>`cy.get('#firstName').type(faker.person.firstName());`<br/>` cy.get('#lastName').type(faker.person.lastName());`<br/>`cy.get('#address').type(faker.location.streetAddress());`<br/>`cy.get('#email').type(faker.internet.exampleEmail());`<br/>` cy.get('#zipCode').type(faker.location.zipCode());`<br/>`cy.get('#city').type(faker.location.city());`<br/>`cy.get('#country').type(faker.location.country());`<br/>`// blur - remove on the focus`<br/>`cy.get('#phone').type(faker.phone.number()).blur();`<br/>`cy.get('[data-cy="order-btn"]').click();`|<img src="https://i.imgur.com/6cGhyk5.png">|

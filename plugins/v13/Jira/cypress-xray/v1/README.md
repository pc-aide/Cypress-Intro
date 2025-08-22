# v1

---

## doc
* https://www.npmjs.com/package/cypress-xray-plugin
* [Authentication - cypress xray plugin](https://qytera-gmbh.github.io/projects/cypress-xray-plugin/section/configuration/authentication/)

---

## Install
````shell
npm i cypress-xray-plugin
````

## cypress.config.js
````js
import { configureXrayPlugin } from "cypress-xray-plugin";

export default defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            await configureXrayPlugin(on, config, {
                jira: {
                    projectKey: "PRJ",
                    url: "https://example.org",
                },
            });
        },
    },
});
````

# v1

---

## doc
* https://www.npmjs.com/package/cypress-xray-plugin
* [Authentication - cypress xray plugin](https://qytera-gmbh.github.io/projects/cypress-xray-plugin/section/configuration/authentication/)
* [Jira - cypress xray plugin](https://qytera-gmbh.github.io/projects/cypress-xray-plugin/section/configuration/jira/#summary_1)

---

## Install
````shell
npm i cypress-xray-plugin
````

## cypress.config.js
* default :
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

* Jira-fields : cypress.config.js
````js
await configureXrayPlugin(on, config, {
    jira: {
        testExecutionIssue: {
            key: "PRJ-16",
            fields: {
                summary: "My execution issue summary",
                description: "My execution issue description",
                assignee: {
                    name: "cool.turtle@company.com"
                },
                customfield_12345: "Sprint 17"
            }
        }
    },
});
````
* env var
````shell
npx cypress run --env JIRA_TEST_EXECUTION_ISSUE='{"key":"PRJ-16","fields":{"summary":"My execution issue summary","description":"My execution issue description","assignee":{"name":"cool.turtle@company.com"},"customfield_12345":"Sprint 17"}}'
````

## Test
````shell
npx cypress run --env JIRA_API_TOKEN="XYZ"
````

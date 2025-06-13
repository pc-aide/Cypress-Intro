# Browserstack Automate

---

## 
````js
{
  "auth": {
    "username": "${BROWSERSTACK_USERNAME}",
    "access_key": "${BROWSERSTACK_ACCESS_KEY}"
  },
  ...
}
````

$env:BROWSERSTACK_USERNAME = "ton_username"
$env:BROWSERSTACK_ACCESS_KEY = "ta_cle"

npx browserstack-cypress run

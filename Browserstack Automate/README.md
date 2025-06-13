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

````powershell
$env:BROWSERSTACK_USERNAME = "username"
$env:BROWSERSTACK_ACCESS_KEY = Read-Host "Entrez votre access_key" -AsSecureString
````

npx browserstack-cypress run

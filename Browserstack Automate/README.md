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
$env:BROWSERSTACK_ACCESS_KEY = Read-Host "your key" -AsSecureString
````

## deploy to Automate
1. https://observability.browserstack.com/projects

<img src="https://i.imgur.com/W1rppQD.png">

`npx browserstack-cypress run`

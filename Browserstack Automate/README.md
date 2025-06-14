# Browserstack Automate

---

## 
1. atuh - browserstack.json
````js
{
    "auth": {
        "username": "${BROWSERSTACK_USERNAME}",
        "access_key": "${BROWSERSTACK_ACCESS_KEY}"
    },
}
````

````powershell
$env:BROWSERSTACK_USERNAME = "username"
# -AsSecureString - browserstack cli can't read object secu like that
$env:BROWSERSTACK_ACCESS_KEY = Read-Host "your key" 
````

## deploy to Automate
1. `deploy to Automate`<br/>`npx browserstack-cypress run`
2. [Projects](https://observability.browserstack.com/projects)

<img src="https://i.imgur.com/W1rppQD.png">

3. a build-name
<img src="https://i.imgur.com/3zed261.png">

4. reporting in terminal to automate upload
<img src="https://i.imgur.com/f9ctXEA.png">

5. info about your build with video
<img src="https://i.imgur.com/mj8yJQQ.png">


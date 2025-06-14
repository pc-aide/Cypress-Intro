# Browserstack Automate

---

## 
1. browserstack.json
````js
{
    "auth": {
        "username": "${BROWSERSTACK_USERNAME}",
        "access_key": "${BROWSERSTACK_ACCESS_KEY}"
    },
    "browsers": [
        {
            "browser": "chrome",
            "os": "Windows 11",
            "versions": [
                "latest"
            ]
        }
    ],
    "run_settings": {
        "cypress_config_file": "cypress.config.js",
        "project_name": "demo project",
        "build_name": "build-demo",
        "exclude": [],
        "parallels": "1",
        "npm_dependencies": {},
        "package_config_options": {},
        "headless": true
    },
    "connection_settings": {
        "local": true,
        "local_identifier": null,
        "local_mode": null,
        "local_config_file": null
    },
    "disable_usage_reporting": false
}
````

````powershell
$env:BROWSERSTACK_USERNAME = "username"
$env:BROWSERSTACK_ACCESS_KEY = Read-Host "your key" -AsSecureString
````

## deploy to Automate
1. `deploy to Automate`<br/>`npx browserstack-cypress run`
2. [Projects](https://observability.browserstack.com/projects)

<img src="https://i.imgur.com/W1rppQD.png">

3. a build-name
<img src="https://i.imgur.com/3zed261.png">



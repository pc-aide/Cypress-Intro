# Web Automate

---

## URL
https://automate.browserstack.com/qig/framework
<img src="https://i.imgur.com/sO9Jjks.png">

---

## Proxy & CERT
````powershell
# optional

````

---

## Install
````powershell
npm install -g browserstack-cypress-cli
````

---

## browserstack cfg
````powershell
# tpl - browserstack.json
browserstack-cypress init
````

1. auth - browserstack.json
````js
{
    "auth": {
        "username": "${BROWSERSTACK_USERNAME}",
        "access_key": "${BROWSERSTACK_ACCESS_KEY}"
    },
}
````

2. cypress_config_file - run_settings
````js
run_settings": {
        "cypress_config_file": "cypress.config.js",
````

3. exclude - run_settings
````js
 "run_settings": {
        "cypress_config_file": "cypress.config.js",
        "project_name": "demo project",
        "build_name": "build-demo",
        "__comment": "In the exclude section, there's no need to include folders like: node_modules/ The automation automatically selects what it needs for simulation. Therefore, leaving it empty has no impact.",
        "exclude": [],
        "parallels": "1",
        "npm_dependencies": {},
        "package_config_options": {},
        "headless": true
    },
````

4. local true - connection_settings
````js
"connection_settings": {
        "__comment": "why in Automate - i see local off - maybe my trial here ?"
        "local": true,
        "local_identifier": null,
        "local_mode": null,
        "local_config_file": null
    },
````
<img src="https://i.imgur.com/cweNgmy.png">

---

````bash
# tmp
export BROWSERSTACK_USERNAME="username"
export BROWSERSTACK_ACCESS_KEY="access_key"

# persistant
echo 'export BROWSERSTACK_USERNAME="username"' >> ~/.bashrc
echo 'export BROWSERSTACK_ACCESS_KEY="access_key"' >> ~/.bashrc

# reload bash
source ~/.bashrc
````

````powershell
$env:BROWSERSTACK_USERNAME = "username"
# -AsSecureString - browserstack cli can't read object secu like that
$env:BROWSERSTACK_ACCESS_KEY = Read-Host "your key" 
````

## deploy to Automate
1. `# deploy to Automate`<br/>`npx browserstack-cypress run`
2. [Projects](https://observability.browserstack.com/projects)

<img src="https://i.imgur.com/W1rppQD.png">

3. a build-name
<img src="https://i.imgur.com/3zed261.png">

4. reporting in terminal to automate upload
<img src="https://i.imgur.com/f9ctXEA.png">

5. info about your build with video
<img src="https://i.imgur.com/mj8yJQQ.png">

---

## log/build_results.txt
<img src="https://i.imgur.com/xlD0kZv.png">
1. firefox
<img src="https://i.imgur.com/4Gfuroh.png">
2. edge
<img src="https://i.imgur.com/6j8cSDp.png">
3. windows 11 & edge - no err
<img src="https://i.imgur.com/VQB4Y3Q.png">
passed<br/>
<img src="https://i.imgur.com/Fu7Fi4s.png">
4. maybe missing local to get a Local ON ?
<img src="https://i.imgur.com/kbv0cHG.png">

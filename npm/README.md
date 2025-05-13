# npm

---

## Intro
* npm is the **package manager**, eg `npm install express` equivalent apt install on debian : `apt install nginx`
* alternative npm, `yarn`

---

## Lic
* Artistic License 2.0

---

## Commands
|n|name|desc|eg|O/P|
|-|----|----|---|--|
|1|version||`npm -v`|<img src="https://i.imgur.com/4u9OaSV.png">|
|2|init|`-y` yes all default|`npm init -y`|<img src="https://i.imgur.com/zyKftGv.png">|
|3|install|`--save-dev` devDependencies<br/><br/><ins>node_modules :</ins><br/> all Dependencies<br/><br/><ins>package-lock.json</ins><br/>**Idempotent** by ensuring that dependencies are installed identically on any machine, even if the package versions are not explicitly specified in the `package.json` file<br/><br/><ins>package.json</ins><br/>It is the main **configuration** file of your Node.js project.|`npm install cypress --save-dev`<br/><br/><ins>[Cypress-Fundamentals-adhithiravi](https://github.com/adhithiravi/Cypress-Fundamentals)</ins><br/>`cd app`<br/>`npm install`<br/>`npm start`|<img src="https://i.imgur.com/kCH6SWy.png"><br/><img src="https://i.imgur.com/V61n9T2.png"><br/><img src="https://i.imgur.com/59T7jXS.png"><br/><img src="https://i.imgur.com/oeZj3lX.png"><br/><br/>cd app<br/><img src="https://i.imgur.com/jVRkCR8.png"><br/>npm install<br/>|
|4|run||`npm run open`|<img src="https://i.imgur.com/EOaUoPu.png"><img src="https://i.imgur.com/fEoDsNd.png">|

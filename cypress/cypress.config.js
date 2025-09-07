const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false, // pas de supportFile custom
    video: true,        // garder les vidéos
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportHeight: 1440,
  viewportWidth: 1440,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://demoqa.com",

  }
});

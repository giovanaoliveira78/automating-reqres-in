const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  retries: 3,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://reqres.in/api",
  },
});
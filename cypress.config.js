const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4000',
    pageLoadTimeout: 120000, // Aumenta timeout para 2 minutos
    defaultCommandTimeout: 10000, // 10 segundos para comandos
    requestTimeout: 10000, // 10 segundos para requests
    responseTimeout: 10000, // 10 segundos para responses
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

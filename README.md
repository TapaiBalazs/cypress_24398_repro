# Reproduction

This repository is for reproducing an issue with Cypress. See: https://github.com/cypress-io/cypress/issues/24398 for further information.

## Steps to reproduce

1. Clone this repository and run npm install on a MacOS Ventura machine
2. When everything is installed, run `npm run cypress:component`
3. When the tests are started up, create a new `whatever.cy.ts` file inside the `src/app` folder
4. See error happening

[See video](./cypress_24398_reproduction.mov)

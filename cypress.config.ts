import { defineConfig } from 'cypress'

export default defineConfig({
  downloadsFolder: "src/test/cypress/downloads",
  fixturesFolder: "src/test/cypress/fixtures",
  screenshotsFolder: "src/test/cypress/screenshots",
  videosFolder: "src/test/cypress/videos",
  defaultCommandTimeout: 10000,
  viewportWidth: 360,
  viewportHeight: 760,
  retries: {
    runMode: 2,
    openMode: 0
  },
  video: false,
  chromeWebSecurity: false,
  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false
  },


  component: {
    supportFile: './cypress/support/component.ts',
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      // 'options': {
      //   'projectConfig': {
      //     'root': './',
      //     'sourceRoot': './src',
      //     'buildOptions': {
      //       'assets': ['./src/favicon.ico', './src/assets'],
      //       'styles': ['./src/styles.css'],
      //       'scripts': [],
      //       'vendorChunk': true,
      //       'extractLicenses': false,
      //       'buildOptimizer': false,
      //       'sourceMap': true,
      //       'optimization': false,
      //       'namedChunks': true,
      //       'inlineStyleLanguage': 'css',
      //       'stylePreprocessorOptions': { 'includePaths': [] },
      //       'fileReplacements': [],
      //       'aot': false,
      //       'commonChunk': true,
      //       'verbose': false,
      //       'progress': true,
      //       'i18nMissingTranslation': 'warning',
      //       'i18nDuplicateTranslation': 'warning',
      //       'watch': false,
      //       'outputHashing': 'none',
      //       'deleteOutputPath': true,
      //       'subresourceIntegrity': false,
      //       'serviceWorker': false,
      //       'statsJson': false,
      //       'budgets': [],
      //       'crossOrigin': 'none',
      //       'allowedCommonJsDependencies': []
      //     }
      //   }
      // }
    },
    specPattern: '**/*.cy.ts'
  }

})

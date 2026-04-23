// Karma configuration file used by `@angular-devkit/build-angular:karma`.
// We keep this minimal and only customize ChromeHeadless flags for CI/Windows environments.

module.exports = function (config) {
  // Prefer Puppeteer's bundled Chrome for test reliability on Windows/CI.
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const puppeteer = require("puppeteer");
    process.env.CHROME_BIN = puppeteer.executablePath();
  } catch {
    // If puppeteer isn't available, Karma will fall back to system Chrome.
  }

  config.set({
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    browsers: ["ChromeHeadless"],
    coverageReporter: {
      dir: require("path").join(__dirname, "coverage"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }, { type: "lcovonly" }],
    },
  });
};


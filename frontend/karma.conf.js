// Karma configuration file used by `@angular-devkit/build-angular:karma`.
// We keep this minimal and only customize ChromeHeadless flags for CI/Windows environments.

module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: [
          "--no-sandbox",
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--remote-debugging-port=0",
        ],
      },
    },
  });
};


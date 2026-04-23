// Karma configuration file used by `@angular-devkit/build-angular:karma`.
// We keep this minimal and only customize ChromeHeadless flags for CI/Windows environments.

module.exports = function (config) {
  // Use the `chromium` npm package if system Chrome isn't installed.
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const chromium = require("chromium");
    // Some versions export a string path, others export { path }.
    process.env.CHROME_BIN = chromium.path ?? chromium;
  } catch {
    // If chromium isn't available, Karma will fall back to system Chrome.
  }

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


const Parcel = require("parcel-bundler");

const files = ["./resources/scripts/main.js", "./resources/styles/main.scss"];

const options = {
  autoInstall: true,
  cache: false,
  hmr: false,
  outDir: "./public",
  scopeHoist: false,
  sourceMaps: false
};

(async function() {
  const bundler = new Parcel(files, options);
  await bundler.bundle();
})();

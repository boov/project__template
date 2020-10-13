const Parcel = require("parcel-bundler");

const files = [
  "./resources/fonts/**/*",
  "./resources/scripts/main.js",
  "./resources/styles/main.scss"
];

const options = {
  hmr: false,
  outDir: "./public",
  sourceMaps: false
};

(async function () {
  const bundler = new Parcel(files, options);
  await bundler.bundle();
})();

const mix = require("laravel-mix");

mix
  .disableNotifications()
  .setPublicPath("dist")
  .sass("src/scss/framework.scss", "dist")
  .js("src/js/framework.js", "dist")
  .babel("dist/framework.js", "dist/framework.js");

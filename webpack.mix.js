const mix = require("laravel-mix");

mix
  .disableNotifications()
  .setPublicPath("demo")
  .sass("src/scss/main.scss", "demo")
  .js("src/js/main.js", "demo");

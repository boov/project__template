const mix = require("laravel-mix");

mix
  .disableNotifications()
  .setPublicPath("public")
  .copy("assets/fonts/", "public/fonts")
  .copy("assets/images/", "public/images")
  .sass("assets/styles/main.scss", "public/styles")
  .js("assets/scripts/main.js", "public/scripts/main.js")
  .babel("public/scripts/main.js", "public/scripts/main.es5.js");

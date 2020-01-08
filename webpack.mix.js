const mix = require("laravel-mix");

mix
  .disableNotifications()
  .setPublicPath("public")
  .sass("resources/styles/main.scss", "public/styles")
  .js("resources/scripts/main.js", "public/scripts");

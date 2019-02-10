let autoprefixer = require("gulp-autoprefixer");
let cleancss = require("gulp-clean-css");
let del = require("del");
let gulp = require("gulp");
let livereload = require("gulp-livereload");
let sass = require("gulp-sass");
let sourcemaps = require("gulp-sourcemaps");

let build = false;

function swallowError(error) {
  console.log(error.toString());
  this.emit("end");
}

gulp.task("build", ["clean"], () => {
  build = true;
  return gulp.start.apply(gulp, ["styles:build"]);
});

gulp.task("clean", () => {
  return del("dist");
});

gulp.task("default", ["watch"]);

gulp.task("styles:build", () => {
  return gulp
    .src(["scss/framework.scss"])
    .pipe(sass({ includePaths: ["node_modules"] }))
    .on("error", swallowError)
    .pipe(autoprefixer("last 3 version"))
    .pipe(cleancss({ level: 1 }))
    .pipe(gulp.dest("dist"));
});

gulp.task("styles:develop", () => {
  return gulp
    .src(["scss/framework.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ includePaths: ["node_modules"] }))
    .on("error", swallowError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
    .on("end", () => livereload.reload());
});

gulp.task("watch", () => {
  livereload.listen(35729);

  gulp.watch("scss/**/*.scss", ["styles:develop"]);
});

const gulp = require("gulp");
const { series, dest, task, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass")(require("sass"));

task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
});

task("scss", function () {
  return gulp
    .src("src/styles/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("style.min.css"))
    .pipe(dest("dist/css"));
});

task("js", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"));
});

task("components", function () {
  return gulp
    .src("src/components/*.js")
    .pipe(concat("components.min.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"));
});

task("watch", function () {
  watch("src/styles/**/*.scss", series("scss"));
  watch("src/**/*.js", series("js"));
  watch("src/*.html", series("html"));
});

task("default", series("html", "scss", "js", "components", "watch"));

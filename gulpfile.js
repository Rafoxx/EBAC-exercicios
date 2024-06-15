const { watch } = require("fs");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const obfuscate = require("gulp-obfuscate");
const uglify = require("gulp-uglify");

function compilasass () {
    return gulp.src ('./src/styles/main.scss')
        .pipe(sass({
            outputStyle:"compressed"
        }))
        .pipe(gulp.dest('./build/styles'))
}

function comprimirimg () {
    return gulp.src ('./src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/imgs'));
}

function comprimirjs () {
    return gulp.src ('./src/scripts/*')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
}

exports.default = function () {
    gulp.watch('./src/styles/main.scss',{ignoreInitial:false},gulp.series(compilasass));
    gulp.watch('./src/scripts/*.js',{ignoreInitial:false},gulp.series(comprimirjs));
    gulp.watch('./src/imgs/*',{ignoreInitial:false},gulp.series(comprimirimg));
}
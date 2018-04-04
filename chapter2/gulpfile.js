const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint=  require('gulp-eslint');

gulp.task('default', function () {

    // запуск ESLint
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint( { fix: true }))
        .pipe(eslint.format());    

    // исходный код для Node
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    // исходные код для браузера
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));

});
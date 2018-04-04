const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function () {

    // исходный код для Node
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    // исходные код для браузера
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));

});
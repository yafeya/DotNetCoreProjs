'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('clean', function () {
    return del([
        'src/app/*.js',
        'src/app/*.map'
    ]);
    //return del.sync('dist/*.*');
});


gulp.task('compile', function () {
    return gulp.src('/')
        .pipe(shell('tsc && concurrently'));
});
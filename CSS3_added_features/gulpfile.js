var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass','sass-watch']);

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('sass-watch',function() {
    gulp.watch('sass/**/*.scss',['sass']);
});


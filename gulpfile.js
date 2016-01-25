//Required

var gulp = require('gulp'),
	uglify = require('gulp-uglify');
	rename = require('gulp-rename');

//script task

gulp.task('scripts', function() {
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

//compass sass tasks



//watch tasks
gulp.task('watch', function() {
	gulp.watch('app/js/**/*.js', ['scripts']);
});

//default task
gulp.task('default', ['scripts', 'watch']);
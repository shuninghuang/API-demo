// Gulp Dependencies
var gulp = require('gulp');
// var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Style Dependencies
var less = require('gulp-less');
// var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-clean-css');

// Development Dependencies
// var jshint = require('gulp-jshint');

// Test Dependencies
var mochaPhantomjs = require('gulp-mocha-phantomjs');

gulp.task('default', ['test', 'watch']);

gulp.task('test', function() {
  return gulp.src('test/test.html')
    .pipe(mochaPhantomjs());
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', []);
  gulp.watch('test/*.js', ['test']);
});
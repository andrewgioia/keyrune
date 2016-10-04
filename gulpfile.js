// gulpfile.js

// Dependencies =================================
var gulp          = require('gulp'),               // task runner/manager (even tho this is a small project, it's still nice to have)
    sass          = require('gulp-sass'),          // compiles sass for us
    notify        = require('gulp-notify'),        // notifies us when a gulp task is completed through a system notifcation
    rename        = require('gulp-rename'),        // allows us to rename files (adding prefixes and suffixes is the main use here).
    autoprefixer  = require('gulp-autoprefixer'),  // great for catching those annoying vendor prefixes on css attributets and values.
    minify        = require('gulp-cssnano'),            // minify our compiled css. sass can do this natively (kind of), so this is used in conjunction with gulp-sass.
    merge         = require('merge-stream'),       // used to merge multiple streams into a single stream for node.
    runseq        = require('run-sequence'),       // runs a sequence of gulp tasks. this is used because gulp.run is deprecated.
    del           = require('del');                // del is used to cleanup cache and build files.

// Variables ====================================
// silly, long, reused paths/dirs go here.

// Gulp Tasks ===================================

// Build CSS task ----------------------------
// Compiles scss into css,
// autoprefix necessary css attributes/values,
// minify prefixed css,
// rename minified file with a '.min' suffix,
// place into ./css directory
//
gulp.task('build', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'))
    .pipe(notify({ onLast: true, message: 'build task complete' }));
});

// Clean task -----------------------------------
// Ensures that all artifacts/remnants of previous build are gone.
//
// $ gulp clean
gulp.task('clean', function() {
  return del(['./css/**/*.*']);
});

// Watch task -----------------------------------
// Great for automating compilation during develpoment.
//
// $ gulp watch
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['clean', 'build']);
});

// Default task ---------------------------------
// Runs the watch task as a task dependency by default.
// To execute this command use one of the following commands
// from within the project root.
//
// $ gulp
// $ gulp default
gulp.task('default', ['watch']);

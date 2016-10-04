// gulpfile.js

// Dependencies =================================
var gulp          = require('gulp'),               // task runner/manager (even tho this is a small project, it's still nice to have)
    sass          = require('gulp-sass'),          // compiles sass for us
    notify        = require('gulp-notify'),        // notifies us when a gulp task is completed through a system notifcation
    rename        = require('gulp-rename'),        // allows us to rename files (adding prefixes and suffixes is the main use here).
    autoprefixer  = require('gulp-autoprefixer'),  // great for catching those annoying vendor prefixes on css attributets and values.
    minify        = require('cssnano'),            // minify our compiled css. sass can do this natively (kind of), so this is used in conjunction with gulp-sass.
    merge         = require('merge-stream'),       // used to merge multiple streams into a single stream for node.
    runseq        = require('run-sequence'),       // runs a sequence of gulp tasks. this is used because gulp.run is deprecated.
    del           = require('del');                // del is used to cleanup cache and build files.

// Gulp Tasks ===================================

// Default task ---------------------------------
// To execute this command use one of the following commands
// from within the project root.
//
// $ gulp
// $ gulp default
gulp.task('default', function() {
  // ...
});

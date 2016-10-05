// gulpfile.js

/*
 * Dependencies =================================
 * | uses/functions of each are provided indiviudally.
 */
var gulp          = require('gulp'),               // task runner/manager (even tho this is a small project, it's still nice to have)
    sass          = require('gulp-sass'),          // compiles sass for us
    notify        = require('gulp-notify'),        // notifies us when a gulp task is completed through a system notifcation
    rename        = require('gulp-rename'),        // allows us to rename files (adding prefixes and suffixes is the main use here).
    autoprefixer  = require('gulp-autoprefixer'),  // great for catching those annoying vendor prefixes on css attributets and values.
    minify        = require('gulp-cssnano'),       // minify our compiled css. sass can do this natively (kind of), but this is used instead.
    del           = require('del'),                // del is used to cleanup cache and build files.
    runseq        = require('run-sequence'),       // quick and dirty way to run a sequence of tasks AS a task itself. gulp.run is deprecated
    merge         = require('merge');              // "merge multiple objects into one, optionally creating a new cloned object." -npm repo

/*
 * Variables ====================================
 * | silly, long, reused paths/dirs go here if needed.
 */
var $supported = [
  'last 2 versions',
  'safari >= 8',
  'ie >= 10',
  'ff >= 20',
  'ios 6',
  'android 4'
];

/*
 * Gulp Tasks ===================================
 * | All gulp tasks will be written/explained here.
 */

/*
 * Build CSS Task -------------------------------
 * | $ gulp build:css
 * |
 * | 1. compiles scss into css,
 * | 2. autoprefix necessary css attributes/values,
 * | 3. place compiled file into ./css directory
 * | 4. minify prefixed css,
 * | 5. rename minified file with a '.min' suffix,
 * | 6. place minified file into ./css directory
 * | 7. notify on task completion
 */
gulp.task('build:css', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({              /* 1. */
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({      /* 2. */
      browsers: $supported,
      add: true,
      cascade: false
    }))
    .pipe(gulp.dest('./css')) /* 3. */
    .pipe(minify({            /* 4. */
      discardUnused: { fontFace: false }
    }))
    .pipe(rename({            /* 5. */
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css')) /* 6. */
    .pipe(notify({             /* 7. */
      onLast: true,
      message: 'build task complete!'
    }));
});

/** Create Config -------------------------------
 * | $ gulp gen:configFile
 */
gulp.task('gen:config', function() {
  return gulp.src('./sass/config/_variables.scss')
    .pipe(rename('config/_settings.scss'))
    .pipe(gulp.dest('./sass'))
    .pipe(notify({
      onLast: true,
      message: 'generated config file successfully!'
    }));
});

/** Clean Task ----------------------------------
 * | $ gulp clean
 * |
 * | Ensures that all artifacts/remnants of previous build are gone.
 */
gulp.task('clean', function() {
  var stream1 = del(['./css/**/*.*']);
  var stream2 = del(['./sass/config/_settings.scss']);

  return merge(stream1, stream2);
});

/** Build Task -------------------------------
 * | $ gulp build
 */
gulp.task('build', function(){
  return runseq(
    'clean',
    'build:css',
    'gen:config'
  );
});

/*
 * Watch Task -----------------------------------
 * | $ gulp watch
 * |
 * | Great for automating compilation during develpoment.
 */
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['build']);
});

/*
 * Default Task ---------------------------------
 * | $ gulp
 * | $ gulp default
 * |
 * | Runs the watch task as a task dependency by default.
 */
gulp.task('default', ['watch']);

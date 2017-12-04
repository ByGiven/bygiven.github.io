'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
// var browserSync = require('browser-sync').create();

gulp.task('workflow', function () {
    gulp.src('./src/sass/**/*.scss')
    // Insert tasks here
    .pipe(gulp.dest('./dist/css/'))
  });

  gulp.task('workflow', function () {
    gulp.src('./src/sass/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(cssnano())
      .pipe(sourcemaps.write('./'))
  
    .pipe(gulp.dest('./dist/css/'))
  });

// Static server Browsersync
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

gulp.task('default', function () {
    gulp.watch('./src/sass/**/*.scss', ['workflow']);
  });
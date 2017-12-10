

//   gulp.task('task-name', function () {
//     return gulp.src('source-files') // Get source files with gulp.src
//       .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//       .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
//   })

// Include gulp
var gulp = require('gulp');
// And our Packages
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Define file sources
var sassMain = ['sass/style.scss'];  
var sassSources = ['sass/**/*.scss']; // Any .scss file in any sub-directory  
var jsSources = ['js/*.js']; // Any .js file in scripts directory


gulp.task('build', function() {
    console.log('Building');
  });

  // Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const jasmine = require('gulp-jasmine');

function lint() {
  return gulp.src(['src/**/*.js',
      'spec/**/*.js',
      '.*.js',
      '*.js'
    ])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
}

function test() {
  return gulp.src('test/**/*.js')
    .pipe(jasmine());
}

gulp.task('lint', lint);
gulp.task('test', ['lint'], test);
gulp.task('default', ['test']);

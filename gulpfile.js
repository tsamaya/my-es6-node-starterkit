const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gutil = require('gulp-util');
const mocha = require('gulp-mocha');

const sources = ['src/**/*.js',
  'test/**/*.js',
  '.*.js',
  '*.js'
];

function linter() {
  return gulp.src(sources)
    .pipe(eslint())
    .pipe(eslint.format())
    // Break on failure to be super strict
    .pipe(eslint.failOnError());
}

function testMocha() {
  return gulp.src(['test/**/*.js'], {
    read: false,
  }).pipe(mocha({
    reporter: 'list',
  })).on('error', gutil.log);
}

gulp.task('lint', linter);

gulp.task('test', ['lint'], testMocha);

// Rerun the task when a file changes
gulp.task('watch', () => {
  gulp.watch(sources, ['test']);
});

gulp.task('default', ['test']);

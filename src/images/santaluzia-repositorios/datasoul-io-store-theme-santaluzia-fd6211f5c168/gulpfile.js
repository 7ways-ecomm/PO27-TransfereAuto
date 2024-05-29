'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const path = require('path');
const flatten = require('gulp-flatten');
const cached = require('gulp-cached');
const dependents = require('gulp-dependents');

var notifyInfo = {
  title: 'Gulp',
  icon: path.join(__dirname, 'gulp.png')
};

const plumberErrorHandler = {
  errorHandler: notify.onError({
    title: notifyInfo.title,
    icon: notifyInfo.icon,
    message: 'Error: <%= error.message %>'
  })
};

gulp.task('clean', () => del(['./styles/css']));

function compileSass(file) {
  return gulp.src(file, { allowEmpty: true })
    .pipe(plumber(plumberErrorHandler))
    .pipe(cached('sass'))
    .pipe(dependents())
    .pipe(sass({
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(flatten())
    .pipe(gulp.dest('./styles/css'));
}

gulp.task('sass', function () {
  return compileSass('./styles/scss/**/*.scss');
});

gulp.task('watch', function () {
  return watch('./styles/scss/**/*.scss', function (file) {
    compileSass(file.path);
  });
});

gulp.task('default', gulp.series('clean', gulp.parallel('watch', 'sass')));

gulp.task('build', gulp.series('clean', 'sass'));

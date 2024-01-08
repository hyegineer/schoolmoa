const gulp = require('gulp'),
  include = require('gulp-html-tag-include'),
  sass = require('gulp-sass')(require('sass')),
  pretty = require('pretty'),
  through2 = require("through2"),
  concat = require('gulp-concat');

const src = './src';
const dist = './dist';

/**
 * ==================================+
 * @task : 정렬 예쁘게
 * ==================================+
 */
function prettyGulp(file, enc, callback) { // ★★★★ add
  file.contents = Buffer.from(pretty(file.contents.toString(), { ocd: true }));
  callback(null, file);
}

/**
 * ==================================+
 * @task : html
 * ==================================+
 */

gulp.task('include', async function () {
  return gulp.src([
    src + "/**/*.html",
    '!' + src + "/include/**/*.html"
  ])
    .pipe(include())
    .pipe(through2.obj(prettyGulp))
    .pipe(gulp.dest(dist));
});

/**
 * ==================================+
 * @task : css options & CSS
 * ==================================+
 */
const scssOptions = {
  scss: {
    outputStyle: 'expanded',
    sourceComments: true
  }
}

gulp.task('styles:ui', function () {
  return gulp.src([
    src + '/scss/*.scss',
    '!' + src + "/scss/pages/*.scss"
  ])
    .pipe(concat('ui.css'))
    .pipe(sass(scssOptions).on('error', sass.logError))
    .pipe(gulp.dest(dist + '/assets/css'))
});

gulp.task('styles:pages', function () {
  return gulp.src(src + '/scss/pages/*.scss')
    .pipe(concat('pages.css'))
    .pipe(sass(scssOptions).on('error', sass.logError))
    .pipe(gulp.dest(dist + '/assets/css'))
});

gulp.task('styles:vendor', function () {
  return gulp.src(src + '/scss/vendor/*.scss')
    .pipe(sass(scssOptions).on('error', sass.logError))
    .pipe(gulp.dest(dist + '/assets/css/vendor'))
});

/**
 * ==================================+
 * @task : js들
 * ==================================+
 */

gulp.task('js', function () {
  return gulp.src([
    src + '/js/custom/*.js',
    "!" + src + '/js/*.js'
  ])
    .pipe(concat('ui.js'))
    .pipe(gulp.dest(dist + '/assets/js/'))
});

gulp.task('js:vendor', function () {
  return gulp.src([
    src + '/js/*.js',
    "!" + src + 'js/custom/*.js'
  ])
    .pipe(gulp.dest(dist + '/assets/js/vendor'))
});

gulp.task('watch', function () {
  gulp.watch(src + "/**/*.html", gulp.series('include'));
  gulp.watch(src + '/**/*.scss', gulp.series('styles:ui'));
  gulp.watch(src + '/**/*.scss', gulp.series('styles:pages'));
  gulp.watch(src + '/**/*.scss', gulp.series('styles:vendor'));
  gulp.watch(src + '/**/*.js', gulp.series('js'));
  gulp.watch(src + '/**/*.js', gulp.series('js:vendor'));
});

/**
 * ==================================+
 * @task : 이미지들
 * ==================================+
 */

gulp.task('images', function () {
  return gulp.src(src + '/images/**/*')
    .pipe(gulp.dest(dist + '/assets/images/'))
});

gulp.task('default', gulp.parallel(
  'include', 'styles:ui', 'styles:pages', 'styles:vendor', 'images', 'js', 'js:vendor', 'watch'
));
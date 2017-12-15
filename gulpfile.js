var directory_Base = "./";
var gulp = require('gulp');
var browserSync = require('browser-sync');
// var compass = require('gulp-compass');
var sourcemaps = require('gulp-sourcemaps');
var image = require('gulp-image');
var sass        = require('gulp-sass');

// Start the server
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'css/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("css/"))
        .pipe(browserSync.stream());
});

gulp.task('image', function () {
  gulp.src('./images-source/**')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('./images'));
});

gulp.task('default', ['image']);

gulp.task('js', function() {
    return gulp.src(['node_modules/@fengyuanchen/datepicker/dist/datepicker.min.js', 'node_modules/owl.carousel/dist/owl.carousel.min.js', 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js', 'node_modules/html5shiv/dist/html5shiv.min.js', 'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js'])
        .pipe(gulp.dest("js/"))
        .pipe(browserSync.stream());
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Watch scss AND html files, doing different things with each.
gulp.task('default', ['browser-sync', 'sass', 'js'], function () {
    gulp.watch("./css/*.scss", ['sass']);
    gulp.watch("./*.html").on("change", browserSync.reload);
});
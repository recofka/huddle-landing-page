var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('sass', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    },
    notify: false
  })
});


gulp.task('watch', gulp.parallel('browser-sync', function (done) {
  gulp.watch('sass/*.scss', gulp.series('sass'));
  gulp.watch('*.html', browserSync.reload);
  done();
}));
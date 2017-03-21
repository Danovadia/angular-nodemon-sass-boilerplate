var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {

});

gulp.task('serve', ['sass', 'nodemon'], function() {
  bs.init(null, {
    proxy: "localhost:4000"
  });
  gulp.watch("./public/app/scss/*.scss", ['sass']);
  gulp.watch("./public/app/*.js").on('change', bs.reload);
  gulp.watch("./*.html").on('change', bs.reload);
});

gulp.task('sass', function() {
  return gulp.src('./public/app/scss/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./dist/css'))
   .pipe(bs.stream());
});


gulp.task('watch', function () {
  gulp.watch('./public/app/scss/*.scss', ['sass']);
  gulp.watch("./index.html").on('change', bs.reload);
});


gulp.task('nodemon', function (cb) {
  var callbackCalled = false;
  return nodemon({script: './index.js'}).on('start', function () {
    if (!callbackCalled) {
      callbackCalled = true;
      cb();
    }
  });
});

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
  gulp.src('src/sass/base.scss')
  .pipe(sass())
  .pipe(gulp.dest('dest/css/'))
})

gulp.task('watch',function(){
  gulp.watch('src/sass/*.scss',['sass'])
})

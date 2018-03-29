
var gulp = require('gulp'),
    sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
return gulp.src('app/scss/main.scss')
.pipe(sass())
.pipe(gulp.dest('app/css'))
});


gulp.task('prefix', () =>
    gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
);
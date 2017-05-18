/**gulp */

let gulp = require('gulp'); 
let sass = require('gulp-sass'); 
let browser = require('gulp-browser'); 

let OUTPUT_DIRECTORY = 'public'; 

// html, css and js tasks 

gulp.task('default', ['html', 'css', 'js']); 

gulp.task('html', function () { 
    return gulp.src('map.html')
        .pipe(gulp.dest(OUTPUT_DIRECTORY)); 
}); 

gulp.task('css', function () {
    return gulp.src('css/map.scss')
        .pipe(sass())
        .pipe(gulp.dest(OUTPUT_DIRECTORY)); 
}); 

gulp.task('js', function () {
    return gulp.src('js/app.js')
    .pipe(browser.browserify())
    .pipe(gulp.dest(OUTPUT_DIRECTORY)); 
});

gulp.task('watch', ['html', 'css', 'js'], function () {
    gulp.watch('map.html', ['html']);
    gulp.watch('css/*.scss', ['css']); 
    gulp.watch('js/*.js', ['js']);  
});
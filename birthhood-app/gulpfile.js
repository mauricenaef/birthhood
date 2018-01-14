let gulp = require('gulp');

let path = require('path');
let tildeImporter = require('node-sass-tilde-importer');
let svgstore = require('gulp-svgstore');
let cheerio = require('gulp-cheerio');
let svgmin = require('gulp-svgmin');
let rename = require('gulp-rename');
let notify = require('gulp-notify');
let concat = require('gulp-concat');
let sass = require('gulp-sass');


/*********************
SVG Sprite
*********************/
gulp.task('svg-icons', function () {
    return gulp
        .src('src/assets/images/svg/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: false
                    }
                }]
            }
        }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(cheerio({
            run: function ($) {
                $('svg').attr('style',  'position: absolute; width: 0; height: 0; overflow: hidden;');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(rename('symbol-defs.svg'))
        .pipe(gulp.dest('src/assets/images'))
        .pipe(notify("SVG Sprite created"));
});

/*********************
Create Complete CSS for Styleguide
*********************/
gulp.task('sass', function(){

    return gulp
        .src(['src/app/**/*.scss'])
        .pipe(sass())
        .pipe(sass({
            importer: tildeImporter,
            includePaths: ['node_modules/'], 
            errLogToConsole: true
        }))
        .pipe(concat('complete-style.css'))
        .pipe(gulp.dest('../static/styleguide/styles/'))
        .pipe(notify('All sass created and combined'));
});



gulp.task('default', function () {
    console.log("Hi! I'm Gulp default task!");
}); 
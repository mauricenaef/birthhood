var gulp = require('gulp');

var path = require('path');
var svgstore = require('gulp-svgstore');
var cheerio = require('gulp-cheerio');
var svgmin = require('gulp-svgmin');
var rename = require('gulp-rename');
var notify = require('gulp-notify');


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
                        minify: true
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


gulp.task('default', function () {
    console.log("Hi! I'm Gulp default task!");
}); 
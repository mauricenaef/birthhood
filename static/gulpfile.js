/* -------------------------------------------------------------------------------------------------

	Build Configuration

 ------------------------------------------------------------------------------------------------- */
'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('cssnano');
var plumber = require('gulp-plumber');
var babel = require("gulp-babel");
var imagemin = require('gulp-imagemin');
var remoteSrc = require('gulp-remote-src');
var unzip = require('gulp-unzip');
var svgstore = require('gulp-svgstore');
var cheerio = require('gulp-cheerio');
var svgmin = require('gulp-svgmin');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var path = require('path');
var del = require('del');
var fs = require('fs');

/*********************
Theme Name
*********************/

var themeName = 'themename.2017';

/*********************
Header and Footer scripts
*********************/

var headerJS = [
	'node_modules/jquery/dist/jquery.js',
	'node_modules/nprogress/nprogress.js',
	'node_modules/webfontloader/webfontloader.js',
	'src/js/header/**'
];
var footerJS = [
	'src/js/footer/**'
];


/*********************
Start of Build Tasks
*********************/

gulp.task('build-dev', [
	'copy-theme-dev',
	'style-dev',
	'header-scripts-dev',
	'footer-scripts-dev',
	'watch'
], function () {
	connect.server({
		base: 'app/public',
		port: '8080'
	}, function () {
		browserSync({
			proxy : 'http://themename.dev'
		});
	});
}
);

gulp.task('build-prod', [
	'copy-theme-prod',
	'style-prod',
	'header-scripts-prod',
	'footer-scripts-prod',
	'process-images'
	//'zip-theme'
]);

gulp.task('default');

gulp.task('cleanup', function () {
	del(['build/**']);
	del(['dist/**']);
});

gulp.task('dist', function () {
	gulp.src('app/public/wp-content/themes/' + themeName + '/**')
		.pipe(gulp.dest('dist/themes/' + themeName))
});

gulp.task('copy-theme-dev', function () {
	gulp.src("src/theme/**")
		.pipe(gulp.dest('app/public/wp-content/themes/' + themeName));
});

gulp.task('copy-theme-prod', function () {
	gulp.src("src/theme/**")
		.pipe(gulp.dest('dist/themes/' + themeName))
});

gulp.task('style-dev', function () {
	return gulp.src('src/scss/style.scss')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(sourcemaps.write('../' + themeName))
		.pipe(gulp.dest('app/public/wp-content/themes/' + themeName))
		.pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task('style-prod', function () {
	return gulp.src('src/scss/style.scss')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(gulp.dest('dist/themes/' + themeName))
});

/*********************
Scripts
*********************/

gulp.task('header-scripts-dev', function () {
	return gulp.src(headerJS)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sourcemaps.init())
		.pipe(concat('header-bundle.js'))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest('app/public/wp-content/themes/' + themeName + '/js'));
});

gulp.task('header-scripts-prod', function () {
	return gulp.src(headerJS)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(concat('header-bundle.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/themes/' + themeName + '/js'));
});

gulp.task('footer-scripts-dev', function () {
	return gulp.src(footerJS)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(concat('footer-bundle.js'))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest('app/public/wp-content/themes/' + themeName + '/js'));
});

gulp.task('footer-scripts-prod', function () {
	return gulp.src(footerJS)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(concat('footer-bundle.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/themes/' + themeName + '/js'));
});

var onError = function (err) {
	gutil.beep();
	console.log(err.toString());
	this.emit('end');
};

/*********************
Images
*********************/

gulp.task('process-images', ['svg-icons'], function() {
    gulp.src('src/theme/images/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({plugins: [{removeViewBox: true}]})
    ],{
    	verbose: true
    }))
    .pipe(gulp.dest('dist/themes/' + themeName + '/images'));
});


/*********************
SVG Sprite
*********************/

gulp.task('svg-icons', function () {
    return gulp
        .src('src/theme/images/SVG/*.svg')
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
        .pipe(gulp.dest('src/theme/images'));
});

/*********************
Reload
*********************/

gulp.task('reload-js', ['footer-scripts-dev', 'header-scripts-dev'], function (done) {
	browserSync.reload();
	done();
});


gulp.task('reload-theme', ['copy-theme-dev'], function (done) {
	browserSync.reload();
	done();
});

gulp.task('watch', function () {
	gulp.watch(['src/scss/**/*.{scss,sass,css}'], ['style-dev']);
	gulp.watch(['src/js/**'], ['reload-js']);
	gulp.watch(['src/theme/**'], ['reload-theme']);
	gulp.watch(['src/theme/images/SVG/**'], ['svg-icons']);
});

/*********************
End of Build Tasks
*********************/
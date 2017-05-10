'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso');

var static_js = [
    'static/mrsk_srtm/src/srtm.js',
    'static/mrsk_srtm/src/srtm-calc.js',
    'static/mrsk_srtm/src/srtm-chart.js',
    'static/mrsk_srtm/src/srtm-chart-frenel.js',
    'static/mrsk_srtm/src/srtm-draw.js',
    'static/mrsk_srtm/src/srtm-pre-chart.js',
    'static/mrsk_srtm/src/srtm-prepare-to-calc.js',
    'static/mrsk_srtm/src/srtm-ui.js'
];
var imgs = [
    'static/mrsk_srtm/src/line.png',
    'static/mrsk_srtm/src/Points.png',
    'static/mrsk_srtm/src/profile.png'
];

gulp.task('js', function() {
    gulp.src(static_js)
        .pipe(uglify())
        .pipe(gulp.dest('static/mrsk_srtm/build/js'));
});

gulp.task('js_mrsk', function() {
    gulp.src(static_js)
        .pipe(uglify())
        .pipe(gulp.dest('../static/build/srtm'));
});

gulp.task('css', function() {
    gulp.src('static/mrsk_srtm/src/srtm.css')
        .pipe(csso())
        .pipe(gulp.dest('static/mrsk_srtm/build/css'));
});

gulp.task('img', function() {
    gulp.src(imgs)
        .pipe(gulp.dest('static/mrsk_srtm/build/css'));
});

gulp.task('default', ['js', 'css', 'img']);
gulp.task('mrsk', ['js_mrsk']);

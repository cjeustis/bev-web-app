'use strict';

const gulp = require('gulp');
const del = require('del');
const tsc = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject('tsconfig.json');
const tslint = require('gulp-tslint');
const util = require('gulp-util')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const minifycss = require('gulp-minify-css')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify');


// Clean dist folder
gulp.task('clean', (cb) => {
    return del(['dist'], cb);
});


// Compile Sass into css - DEBUG
gulp.task('sass-debug', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('dist/css'));
});

// Compile Sass into css - RELEASE
gulp.task('sass', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('dist/css'));
});


// Link up ts files
gulp.task('tslint', () => {
    return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});


// Compile ts and create sourcemaps
gulp.task('compile', ['tslint'], () => {
    let tsResult = gulp.src('src/**/*.ts')
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(gulp.dest('dist'));
});


// Copy all other files
gulp.task('resources', () => {
    return gulp.src(['src/**/*', '!**/*.ts', '!**/*.scss'])
        .pipe(gulp.dest('dist'));
});


// Copy libraries we need
gulp.task('libs', () => {
    return gulp.src([
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/rxjs/**',
            'node_modules/zone.js/dist/**',
            'node_modules/@angular/**',
            'node_modules/material-design-lite/material.min.css',
            'node_modules/material-design-lite/material.min.js',
            'node_modules/material-design-icons/iconfont/material-icons.css',
            'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2',
            'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff',
            'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf',
            'node_modules/chart.js/dist/Chart.js'
        ], {base: './node_modules/'})
        .pipe(gulp.dest('dist/lib'));
});


// Watch for changes
gulp.task('watch', () => {
    gulp.watch(['src/**/*.ts'], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(['src/**/*.html'], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(['src/**/*.scss'], ['sass']).on('change', function (e) {
        console.log('Style file ' + e.path + ' has changed. Compiling.');
    });
});


// Build out the project for debugging purposes
gulp.task('debug', ['sass-debug', 'compile', 'resources', 'libs'], () => {
    console.log('Building the project ...');
});

// Build out the project for release
gulp.task('release', ['sass', 'compile', 'resources', 'libs'], () => {
    console.log('Building the project ...');
});
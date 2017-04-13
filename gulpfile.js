"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');

var config = {
  port: 8080,
  devBaseUrl: 'http://localhost',
  paths:{
    html:'./src/*.html',
    js:'./src/JS/main.js',
    css:'./src/CSS/*.css',
    images: './src/images/*',
    dist:'./docs'
  }
}

gulp.task('connect',function(){
  connect.server({
    root:['docs'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function(){
  gulp.src('docs/index.html')
    .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/', app: '/Applications/Google\ Chrome.app'}));
});

gulp.task('js', function(){
  browserify(config.paths.js)
    .bundle()
    .on('error',console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('html',function(){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('css',function(){
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('imgMinify',function(){
  gulp.src(config.paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest(config.paths.dist + '/images'));
});

gulp.task('watch',function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'css', 'js', 'imgMinify', 'open', 'watch']);

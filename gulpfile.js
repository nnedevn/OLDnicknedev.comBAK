'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    gulp.watch([
        'app/*.html',
        'app/styles/**/*.css',
        'app/scripts/**/*.js'
    ]).on('change', function (file) {
        server.changed(file.path);
    });
});

gulp.task('uncss', function () {
    return gulp.src('app/styles/styles.css')
        .pipe($.uncss({
            html: ['app/index.html','http://nicknedev.com']
        }))

        .pipe($.rename('style.min.css'))
        .pipe(gulp.dest('app/styles/'));
});

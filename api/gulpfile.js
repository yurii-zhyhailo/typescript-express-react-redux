var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
    const tsResult = tsProject.src()
      .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});
  
gulp.task('watch', ['scripts'], () => {
    gulp.watch(['src/**/*.ts'], ['scripts']);
});

gulp.task('default', ['watch'], () => {
    nodemon({
        script: "dist/server.js",
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: [
            './node_modules/**'
        ]
    }).on('restart', function() {
        console.log('Restarting...');
    });
});



var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    ts = require('gulp-typescript'),
    webpack = require('webpack-stream');

const tsProject = ts.createProject('tsconfig.json');
const webpackConfig = require('./webpack.config.js');

gulp.task('scripts', () => {
    const tsResult = tsProject.src()
      .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('webpack', () => {
    gulp.src('src/index.tsx')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});
  
gulp.task('watch', ['scripts', 'webpack'], () => {
    gulp.watch(['src/**/*.ts', 'src/**/*.tsx'], ['scripts', 'webpack']);
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



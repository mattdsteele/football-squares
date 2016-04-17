import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';
import path from 'path';
import { Server } from 'karma';

gulp.task('default', ['build']);
gulp.task('serve', ['copy', 'webpack-dev-server']);
gulp.task('build', ['copy', 'webpack-build']);
gulp.task('copy', () => {
  gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist'));
  gulp.src('src/**/*.css')
  .pipe(gulp.dest('dist'));
});
gulp.task('test', done => {
  new Server({
    configFile: `${__dirname}/karma.conf.js`
  }, done).start();
});
gulp.task('webpack-build', callback => {
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new gutil.PluginError("webpack:build", err);
    callback();
  });
});

gulp.task('webpack-dev-server', callback => {
  new WebpackDevServer(webpack(webpackConfig), {
    path: path.resolve(`${__dirname}/dist`),
    contentBase: 'dist'
  })
  .listen(8080, 'localhost', err => {
    gutil.log('[dev server]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
});

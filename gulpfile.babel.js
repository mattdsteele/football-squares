import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

gulp.task('default', ['build']);
gulp.task('serve', ['webpack-dev-server']);
gulp.task('build', ['webpack-build']);
gulp.task('webpack-build', callback => {
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new gutil.PluginError("webpack:build", err);
    callback();
  });
});

gulp.task('webpack-dev-server', callback => {
  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: `/dist`
  })
  .listen(8080, 'localhost', err => {
    gutil.log('[dev server]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
});

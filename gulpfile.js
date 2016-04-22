var gulp = require('gulp');
var elixir = require('laravel-elixir');
var del = require('del');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//删除 public 目录下的 build js css目录
gulp.task('clean', function (cb) {
  del([
    'public/build',
    'public/css',
    'public/js'
  ], cb);
});

elixir(function (mix) {
//  mix.task('clean');

  //安装 jquery 插件
  mix.copy('bower_components/jquery/dist/jquery.min.js', 'public/js/jquery.min.js');
  
  //安装 bootstrap 插件
  mix.copy('bower_components/bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.min.js');
  mix.copy('bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');
  
  //安装 fullpagejs 插件
  mix.copy('bower_components/fullpage.js/dist/jquery.fullpage.min.js', 'public/js/jquery.fullpage.min.js');
  mix.copy('bower_components/fullpage.js/dist/jquery.fullpage.min.css', 'public/css/jquery.fullpage.min.css');
   
  //安装 require 插件
  mix.copy('bower_components/requirejs/require.js', 'public/js/require.js');
  

  mix.sass(['app.scss'], 'public/css/app.css')
    .scripts(['app.js'], 'public/js/app.js')
    .scripts(['myFullpage.js'], 'public/js/myFullpage.js')
    .scripts(['aa.js', 'bb.js'], 'public/js/aabb.js')
    .scripts(['config.js'], 'public/js/config.js')
    .version(['css/app.css', 'js/config.js']);


  mix.browserSync({
    proxy: 'lblog.com'
  });
});

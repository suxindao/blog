<?php

/*
  |--------------------------------------------------------------------------
  | Routes File
  |--------------------------------------------------------------------------
  |
  | Here is where you will register all of the routes in an application.
  | It's a breeze. Simply tell Laravel the URIs it should respond to
  | and give it the controller to call when that URI is requested.
  |
 */

//Route::get('/', function () {
//  return view('welcome');
//});
  
/*
  |--------------------------------------------------------------------------
  | Application Routes
  |--------------------------------------------------------------------------
  |
  | This route group applies the "web" middleware group to every route
  | it contains. The "web" middleware group is defined in your HTTP
  | kernel and includes session state, CSRF protection, and more.
  |
 */

Route::group(['middleware' => 'web'], function () {
  Route::auth();

  // 将上面的移入这里,就可以修改登陆后的header改变
  Route::get('/', function () {
    return view('welcome');
  });

  Route::get('/home', 'HomeController@index');
  
  Route::get('/fullpage', 'FullPageController@index');
  
});

// 强制 / 也必须注册登录
//Route::get('/', ['middleware' => 'auth', function () {
//    return view('welcome');
//  }]);

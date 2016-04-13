# Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, queueing, and caching.

Laravel is accessible, yet powerful, providing tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

# 项目说明

此项目为自己学习PHP框架 Laravel 的实例项目，增加了以下功能：
1)扩展了用 Bower 来管理前端包
2)使用 RequireJS 来管理所有JS文件
3)试验了 Laravel 的 version 功能配置css和js文件

# 项目启动

1）安装 PHP7.0
2）安装 Composer，升级到 1.0.0
3）安装 Laravel 框架
4）安装 mysql
5）项目目录运行 composer install
6）项目目录运行 sudo npm install
7）项目目录运行 bower instal
8）项目目录运行 cp .env.example .env
9）项目目录运行 php artisan key:generate
10）修改 .env 中数据库的配置
11）项目目录运行 php artisan migrate
12）启动项目，执行命令 php artisan serve
13）在浏览器中输入地址 http://localhost:8000 查看项目

祝好运！

--神兽保佑，代码无忧--

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var reqTwo = requirejs.config({
  baseUrl: '/js',
  context: "context1",
  paths: {
    app1: 'app',
    myFullpage: 'myFullpage',
    app3: 'aabb',
    jquery: 'jquery.min',
    bootstrap: 'bootstrap.min',
    fullpage: 'jquery.fullpage.min'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    fullpage: {
      deps: ['jquery']
    },
    app3: {
      init: function () {
        return {
          hello1: alertAA,
          hello2: alertBB,
          hello3: alertCC
        };
      }
    }
  }
});

var myApi = {};

reqTwo(['app1', 'myFullpage', 'app3', 'fullpage', 'bootstrap'], function (app1, myFullpage, app3) {

//  app1.hello();
//  app2.hello();
//  app3.hello3();

  myApi.app1 = app1;
  myApi.myFullpage = myFullpage;
  myApi.app3 = app3;

  $(document).ready(function () {
//    myFullpage.hello();
    myFullpage.showfullpage();
  });

  //直接引用,可以使用
//  var bbb = require('myFullpage');
//  bbb.hello();

  //通过注入方法调用
//  require(['myFullpage'], function(aaa){
//    aaa.hello();
//  });

});



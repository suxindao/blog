/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

requirejs.config({
  baseUrl: '/js',
  paths: {
    app1: 'app',
    app2: 'app2',
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

requirejs(['app1', 'app2', 'app3', 'fullpage', 'bootstrap'], function (app1, app2, app3) {
//  alert($().jquery);
//  app1.hello();
//  app2.hello();
//  app3.hello3();
  myApi.app1 = app1;
  myApi.app2 = app2;
  myApi.app3 = app3;

//  fullpage.initialize('#fullpage', {
//    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
//    menu: '#menu',
//    css3: true
//  });

  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    css3: true
  });

});



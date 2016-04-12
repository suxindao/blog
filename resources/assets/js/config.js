/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

requirejs.config({
  baseUrl: 'js',
  paths: {
    app1: 'app',
    app2: 'app2',
    app3: 'aabb',
    jquery: 'jquery',
    bootstrap: 'bootstrap'
  },
  shim: {
    app3: {
      init: function () {
        return {
          hello: alertAA,
          hello2: alertBB
        }
      }
    }
  }
});
requirejs(['app', 'app2', 'app3'], function (app1, app2, app3) {
  app3.hello();
});



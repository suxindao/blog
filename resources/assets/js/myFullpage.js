/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define([], function () {
  return {
    hello: function () {
      alert("hello, app 2222");
    },
    showLog: function (Message) {
      console.log(Message);
    },
    showfullpage: function () {
      $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        verticalCentered: true,
        navigation: false,
        //    navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'top',
        css3: true
      });
    }
  };
});
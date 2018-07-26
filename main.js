/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

requirejs.config({
  baseUrl: '.',
  paths:{
  },
});

require(['./add', './square'], function(add, square) {
  console.log(add(1, 2));
  console.log("Hello");
  console.log(square(5));
});


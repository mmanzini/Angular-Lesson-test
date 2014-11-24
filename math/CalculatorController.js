
//var myApp = angular.module('myApp');
//
//myApp.controller('CalculatorController', function(){
//
//});

//(function(){
//})();
//
//(function(root){
//})(window);


'use strict';

var uuid = require('uuidv4');

module.exports = function($interval, calculator){
    var that = this;

    

    that.id = uuid();
    that.x = 0;
    that.y = 0;
    that.sum = 0;

    that.seconds = 0;
    
    that.phones =[
        {name: 'iphone 6', price: 699},
        {name: 'galaxy S5', price: 599},
        {name: 'galaxy S4', price: 299},
        {name: 'lumia', price: 2}
    ];

    $interval( function(){
         that.seconds++;
    }, 1* 1000);

//        setInterval( function(){
//            $scope.$apply(function(){
//                that.seconds++;
//            });
//        }, 1 * 1000);

    this.add = function(a,b){
//        var sum = ((a - 0) + (b - 0));
        that.sum = calculator.add((a - 0), (b - 0));
    };
};
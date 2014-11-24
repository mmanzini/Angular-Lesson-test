'use strict';

module.exports = angular.module('myApp.math', [])

    .controller('CalculatorController', ['$interval', 'calculator', require('./CalculatorController')])
    .controller('HelloWordController', [ require('./HelloWordController')])

    .filter('reverse', [require('./reverseFilter')])

//    .service('calculator', {
//        
//    });

    .factory('calculator', [require('./calculatorService')])

    .directive('helloWorld', function() {
        return {
            //template: '<h1>hello world!</h1>',
            templateUrl: '/math/helloWorldView.html',
            controller: 'HelloWordController as helloWorld',
            restrict: 'E',
            replace: true,
            scope: {
                backgroundColor: '@backColor'
            },
            transclude: true
            
        };
    })

    .directive('focus', function(){
        return function(scope, element, attributes){
            element.focus();
        };
    });
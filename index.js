'use strict';

//angular.module('myApp', []); always declare an empty array cause is a claclaretion, without is just a request
angular.module('myApp', [
    require('./math').name,
    'ui.router'
])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/calculator");
    
    $stateProvider
        .state('calculator', {
            url: '/calculator',
            templateUrl: 'calculator.html',
            controller: 'CalculatorController as calculator'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        });
    
});


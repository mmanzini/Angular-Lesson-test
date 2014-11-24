(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./math":5}],2:[function(require,module,exports){

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
},{"uuidv4":7}],3:[function(require,module,exports){
'use strict';

module.exports = function(){
    this.showMessage = function(){
        alert('hello world was clicked!');
    };
};
},{}],4:[function(require,module,exports){
'use strict';

module.exports = function(){
        return {
            add: function(first, second){
                return first + second;
            }
        };
    }
},{}],5:[function(require,module,exports){
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
},{"./CalculatorController":2,"./HelloWordController":3,"./calculatorService":4,"./reverseFilter":6}],6:[function(require,module,exports){
'use strict';

module.exports = function(){
    return function(text, length){
        
        length = length || text.length; 
        
        return text.split('').reverse().join('').substring(0, length);
    };
};
},{}],7:[function(require,module,exports){
'use strict';

// See http://stackoverflow.com/a/2117523/1333873 for details.
var uuidv4 = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (character) {
    var randomNumber = Math.random() * 16 | 0,
        result =
          character === 'x' ?
            randomNumber :
            randomNumber & 0x3 | 0x8;

    return result.toString(16);
  });
};

uuidv4.empty = function () {
  return '00000000-0000-0000-0000-000000000000';
};

module.exports = uuidv4;

},{}]},{},[1]);

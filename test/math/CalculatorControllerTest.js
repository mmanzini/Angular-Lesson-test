'use strict';
var assert = require('node-assertthat');
var CalculatorController = require('../../math/CalculatorController');

suite('CalculatorController', function(){
    test('is a funtion.', function(done){
        assert.that(CalculatorController,is.ofType('function'));
        done();
    });
    
    test('return an object.', function(done){
        var $interval = function(){};
        assert.that(new CalculatorController($interval),is.ofType('object'));
        done();
    });
    
    
});
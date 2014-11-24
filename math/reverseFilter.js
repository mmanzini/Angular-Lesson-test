'use strict';

module.exports = function(){
    return function(text, length){
        
        length = length || text.length; 
        
        return text.split('').reverse().join('').substring(0, length);
    };
};
"use strict";

var operations = {};

operations.add = function (a, b) {
  return a + b;
};

operations.multiply = function (a, b) {
  return a * b;
};

/* ~dab const tape = require('tape');
const numbers = require('../src/operations.js'); */

/* ~dab tape('Add - adds numbers', function(t) {t.equal(numbers.add(1, 2), 2);
t.end();
});*/

/* ~dab const numbers = require("../src/operations.js")
test( 'add: add two numbers correctly', function( assert ) {
  assert.equal( numbers.add(1,2), 3, 'Add numbers' ) ;
  assert.end() ;
} );
*/

/* ~dab test('Multiple numbers', function(t){
    t.equal(numbers.multiply(1,2), 3, 'Multiple numbers');
    t.end();
});
*/

module.exports = operations;
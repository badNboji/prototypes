"use strict";

var operations = {};

operations.add = function (a, b) {
  return a + b;
};

operations.multiply = function (a, b) {
  return a * b;
};
/*  dab Tape */

/*
const numbers = require("../src/operations.js")
test( 'add: add two numbers correctly', function( assert ) {
  assert.equal( numbers.add(1,2), 3, 'Add numbers' ) ;
  assert.end() ;
} );

test('Multiple numbers', function(t){
    t.equal(numbers.multiply(1,2), 3, 'Multiple numbers');
    t.end();
});
*/

// GUIDE --------------------------------------------------------------

// numbers = require('../src/numbers.js'); */

/* ~dab( Add - adds numbers', equal(numbers.add(1,2), 2) */

module.exports = operations;
 const tape = require('tape');
const numbers = require('../src/operations.js'); 

 tape('Add - adds numbers', function(t) {t.equal(numbers.add(1, 2), 2);
t.end();
});

 const numbers = require("../src/operations.js")
test( 'add: add two numbers correctly', function( assert ) {
  assert.equal( numbers.add(1,2), 3, 'Add numbers' ) ;
  assert.end() ;
} );


 test('Multiple numbers', function(t){
    t.equal(numbers.multiply(1,2), 3, 'Multiple numbers');
    t.end();
});


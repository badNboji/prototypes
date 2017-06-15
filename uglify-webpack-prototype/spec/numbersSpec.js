var test = require( 'tape' ) ;
var AddNumbers = require("../src/numbers.js")

test( 'add: add two numbers correctly', function( assert ) {
  assert.equal( AddNumbers.add(1,2), 3, 'Add numbers' ) ;
  assert.end() ;
} );

test('Multiple numbers', function(t){
    t.equal(AddNumbers.multiply(1,2), 3, 'Multiple numbers');
    t.end();
});



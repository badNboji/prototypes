module.exports = function ({types: t}) {
  return {
    visitor: {
      Program(path) {
        // if there are comments in the program file
        if (path.parent.comments.length) {
          // loop through comments
          for (let i = 0; i < path.parent.comments.length; i += 1) {
            console.log('COMMENTS', path.parent.comments[i].value)
            let comment = path.parent.comments
            let reqTape = " dab const test = require( 'tape' );"
            // if a comment requires Tape then replace with complete require statement
            if (comment[i].value.includes('dab Tape')) {
              path.parent.comments[i].value = reqTape;
              console.log('COMMENT IN TAPE REQUIRE', comment[i].value)
            }
          }
        }
      }
    }
  };
}

// GUIDE --------------------------------------------------------------

/* ~dab Tape = true, numbers = require('../src/numbers.js'); */
/* ~dab( Add - adds numbers', equal(numbers.add(1,2), 2) */

/*
~dab var test = require( 'tape' );
const numbers = require("../src/operations.js")
test( 'add: add two numbers correctly', function( assert ) {
  assert.equal( numbers.add(1,2), 3, 'Add numbers' ) ;
  assert.end() ;
} );
*/

/*
~dab test('Multiple numbers', function(t){
    t.equal(numbers.multiply(1,2), 3, 'Multiple numbers');
    t.end();
});
*/

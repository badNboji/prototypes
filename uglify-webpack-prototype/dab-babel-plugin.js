module.exports = function ({types: t}) {
  let tapeCount = 0;
  return {
    visitor: {
      Program(path, state) {
        // if there are comments in the program file
       
        if (path.parent.comments.length) {
          // console.log(path.parent.comments,state.file.opts.sourceMapTarget);
          //  console.log(path.parent.comments, state.file.opts.sourceFileName);
          // loop through comments
          
          for (let i = 0; i < path.parent.comments.length; i += 1) {
            let testArr = [];
            // console.log('COMMENTS', path.parent.comments[i].value)
            let comment = path.parent.comments
            // console.log(tapeCount);
            let reqTape = " ~dabconst test = require( 'tape' ); " + "\n" + "const " + state.file.opts.sourceMapTarget.slice(0,state.file.opts.sourceMapTarget.length-3) + " = require('" + state.file.opts.filename + "');"
            let reqFileName = " ~dabconst " + state.file.opts.sourceMapTarget.slice(0,state.file.opts.sourceMapTarget.length-3) + " = require('" + state.file.opts.filename + "');";
            // if a comment requires Tape then replace with complete require statement
            if (comment[i].value.includes('%Tape')) {
              // console.log("comm", comment[i].value);
              if (tapeCount === 0) {
                // console.log("first", comment[i].value );
                comment[i].value = reqTape;
                tapeCount++;
              } else {
                // console.log("2nd", comment[i].value);
                comment[i].value = reqFileName;
                tapeCount++;
              }
            } 
            if (comment[i].value.includes('~dab(')) {
  
              let currComment = comment[i].value.split(",");
              console.log(currComment);
              let description = "'" + currComment[0].split("(")[1].toString() + "'";
              let expression = currComment[1].split("(")[0].slice(1);
              let actualFunc = currComment[1].split("(")[1];
              let actualInput = "(" + currComment[1].split("(")[2].split(")")[0].replace("|", ",") + ")";
              let expected = currComment[2].split(")")[0];
              let errorMess;

              if (currComment[3] === undefined){
                errorMess = "'" + "Errorrr" + "'";
              } 
              if (currComment[3] !== undefined) {
                errorMess = "'" + currComment[3].split(")")[0] + "'";
              }

              let changeComment = " ~dabtest(" + description + ", function (t) {" + "\n" + "   t." + expression + "(" + actualFunc + actualInput + ", " + expected + ", " + errorMess + ");" + "\n" + "   t.end();" + "\n" + "});";
              comment[i].value = changeComment ;
              
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

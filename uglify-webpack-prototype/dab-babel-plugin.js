module.exports = function ({types: t}) {
  return {
    visitor: {
      Program(path) {
        // if there are comments in the program file
        console.log(path);
        if (path.parent.comments.length) {
          // loop through comments
          for (let i = 0; i < path.parent.comments.length; i += 1) {
            // console.log('COMMENTS', path.parent.comments[i].value)
            let comment = path.parent.comments
            const reqTape = " ~dab const tape = require('tape');"
            // if a comment requires Tape then replace with complete require statement
            if (comment[i].value.includes('~dab Tape')) {
              // console.log('COMMENT IN TAPE REQUIRE', comment[i].value)
              let fileReq = comment[i].value.split(`\n`)[1]
              let reqs = reqTape + `\n` + fileReq;
              // console.log('REQS', reqs);
              comment[i].value = reqs;
            }
            else if (comment[i].value.includes('~dab tape(')) {
              let comma = comment[i].value.indexOf(',')
              let params0 = comment[i].value.substring(0, comma)
              let params1 = comment[i].value.substring(comma + 1).trim();
              let func = params0 + ", function(t) {t."+ params1 +";\nt.end();\n});"
              // console.log('FUNC', func);
              comment[i].value = func;
            }
          }
        }
      }
    }
  };
}

// GUIDE --------------------------------------------------------------

/* ~dab Tape
const numbers = require('../src/numbers.js'); */

/* ~dab tape('Add - adds numbers', equal(numbers.add(1,2), 2) */

/* ~dab tape( 'add: add two numbers correctly', function(t) {
  t.equal(numbers.add(1,2), 3);
  t.end() ;
} );
*/

/*
~dab tape('Multiple numbers', function(t){
    t.equal(numbers.multiply(1,2), 3, 'Multiple numbers');
    t.end();
});
*/

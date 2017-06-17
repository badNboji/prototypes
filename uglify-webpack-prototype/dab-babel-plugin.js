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
            if (comment[i].value.includes('~>')) {

              let currComment = comment[i].value.split("~>");
              
              // currComment[0] is empty
              // currComment[1] is description always
              let description = currComment[1].split(/\n/)[0];

              let actual; 
              let expression;
              let expected;
              let errMessage;
              let resultOfAssertion = "";
              let assertion;

              function assertions(string) {
                let argumentSplit = string.split(":");
                console.log(" argument split", argumentSplit);
                //if assertion contains an error message
                if (argumentSplit.length > 1) {
                  actual = argumentSplit[0].split(" ")[0];
                  console.log("1st", argumentSplit);
                  expression = argumentSplit[0].split(" ")[1];
                  expected = argumentSplit[0].split(" ")[2];
                  errMessage = "'" + argumentSplit[1].split(/\n/)[0] + "'";
                } 
                console.log("out of if", expression, expected, errMessage);
                //if assertion does not contain an error message
                 if (argumentSplit.length < 2) {
                   console.log("2nd", argumentSplit);
                  let noArgumentSplit = string.split(" ");
                  actual = noArgumentSplit[0];
                  expression = noArgumentSplit[1];
                  expected = noArgumentSplit[2];
                  errMessage = "'" + "errorr" + "'";
                }
                resultOfAssertion += "   t." + expression + "(" + actual + ", " + expected + ", " + errMessage + ");" + "\n"; 
                
                return resultOfAssertion;
              }
              // console.log(expected, errMessage, expression)
        
              // if comment[2] does not exist then comment[2] would have been assertion
              if (currComment[2].indexOf(">") === -1) {
                assertion = assertions(currComment[2]);
              }


              // if currComment[2] is a variable (optional)
              let variables;
              if (currComment[2].indexOf(">") !== -1) {
                let varStorage = currComment[2].slice(1).split(",");
                let allVar = "";
                for(let eachVar = 0; eachVar < varStorage.length; eachVar++) {
                  allVar += "   var " + varStorage[eachVar] + "\n";
                }
                variables = allVar;
              }
            
// [ ' \r\n  ',
//   'quare root\r\n  ',
//   '   var n = 2\r\n  \n',
//   'anotherFile.square(n) equal 4\r\n  ' ]
// [ ' ',
//   'add: add two numbers correctly\r\n   ',
//   'operations.add(1,2) equal 3  \r\n   ' ]
// [ ' ',
//   'Multiple numbers\r\n  ',
//   '   var inp1 = 1\n   var  inp2 = 2\r\n  \n',
//   'operations.multiply(inp1, inp2) equal 3 : Multiple numbers\r\n' ]
              
              // let changeComment = " ~dabtest(" + description + ", function (t) {" + "\n" + "   t." + expression + "(" + actualFunc + actualInput + ", " + expected + ", " + errorMess + ");" + "\n" + "   t.end();" + "\n" + "});";
              // comment[i].value = changeComment ;
              
            } 
          }
        }
      }
    }
  };
}





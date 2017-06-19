const anotherFile = require('C:/Users/Batul/Desktop/prototypes/uglify-webpack-prototype/src/anotherFile.js');

test('quare root', function (t) {
   var  n = 2;
   t.equal(anotherFile.square(n), 4, ' not worth it');
   t.notEqual(anotherFile.square(n), 4, 'errorr');
   t.end();
});

const test = require( 'tape' ); 
const operations = require('C:/Users/Batul/Desktop/prototypes/uglify-webpack-prototype/src/operations.js');

test('add: add two numbers correctly', function (t) {
   t.equal(operations.add(1,2), 3, 'errorr');
   t.end();
});

test('Multiple numbers', function (t) {
   var  inp1 = 1;
   var  inp2 = 2;
   t.equal(operations.multiply(inp1,inp2), 3, ' Multiple numbers');
   t.end();
});

// dab hello

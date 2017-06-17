const test = require( 'tape' ); 
const anotherFile = require('C:/Users/Batul/Desktop/prototypes/uglify-webpack-prototype/src/anotherFile.js');

test('square root', function (t) {
   t.equal(anotherFile.square(2),  4, 'Errorrr');
   t.end();
});

const operations = require('C:/Users/Batul/Desktop/prototypes/uglify-webpack-prototype/src/operations.js');

test('add: add two numbers correctly', function (t) {
   t.equal(operations.add(1,2),  3, ' Add numbers');
   t.end();
});

test('Multiple numbers', function (t) {
   t.equal(operations.multiply(1,2),  3, ' Multiple numbers');
   t.end();
});

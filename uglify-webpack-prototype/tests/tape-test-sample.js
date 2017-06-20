const test = require( 'tape' ); 
const mvpDemo = require('C:/Users/Batul/Desktop/prototypes/uglify-webpack-prototype/src/mvpDemo.js');

test('Negative or Odd', function (t) {
t.equal(mvpDemo.isNegativeOrOdd(1),  true , 'errorr');
t.equal(mvpDemo.isNegativeOrOdd(10),  false, 'errorr');
t.notEqual(mvpDemo.isNegativeOrOdd(10),  true, 'errorr');
t.end();
});

test('Add two numbers correctly', function (t) {
	t.equal(mvpDemo.add(1,2),  3 , 'errorr');
	t.end();
});

test('Multiple numbers', function (t) {
	t.equal(mvpDemo.multiply(1,2),  2, 'errorr');
	t.end();
});

test('Reverse String', function (t) {
	t.equal(mvpDemo.reverseString('will'),  'lliw', 'errorr');
	t.notEqual(mvpDemo.reverseString('hello'),  'lliw', 'errorr');
	t.end();
});

const operations = require('C:/Users/Batul/Desktop/prototypes/uglify-webpack-prototype/src/operations.js');

test('add: add two numbers correctly', function (t) {
	t.equal(operations.add(1,2),  3 , 'errorr');
	t.end();
});

test('Multiple numbers', function (t) {
	let inp1=1;
	let inp2=2;

	t.equal(operations.multiply(inp1,inp2),  2 , 'errorr');
	t.end();
});

// dab hello

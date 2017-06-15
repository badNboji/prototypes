var test = require('tape');
var tests = require('./src/AddNumbers');

test("multiply: multiply the number by itself", function(t){
    let actual = tests.MultipleNumber(2,3)
    t.equal(actual, 5, "correct");
    t.end();
});

test("multiply: multiply the number by itself", function(t){
    let actual = tests.MultipleNumber(2,3)
    
    t.notEqual(actual, 5);
    t.end();
});
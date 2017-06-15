const tests = {};

tests.add = function(a,b){
    return a+b;
};

/* dab var app=require("../src/numbers.js");

describe("Addition",function(){
    it("The function should add 2 numbers",function() {
        var value=app.add(5,6);
        expect(value).toBe(11);
    });
});

*/

tests.multiply = function(a,b){
    return a * b;
}

/* dab describe("Multiply",function(){
    it("multiplies numbers", function(){
        let value = app.multiply(5,5);
        expect(value).toBe(20);
    });
});
*/

module.exports = tests;

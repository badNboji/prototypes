 var app=require("../src/numbers.js");

describe("Addition",function(){
    it("The function should add 2 numbers",function() {
        var value=app.add(5,6);
        expect(value).toBe(11);
    });
});



 describe("Multiply",function(){
    it("multiplies numbers", function(){
        let value = app.multiply(5,5);
        expect(value).toBe(20);
    });
});


/*
describe("reverseString", function() {
    
    it("should take a string and reverse it", function() {
        expect( reverseString('hello') ).toEqual('olleh');
    });
    
    it("should return the value given if not a typeof String", function() {
        expect( reverseString(null) ).toBe(null);
        expect( reverseString(0) ).toEqual(0);
    });

});


describe("getMaxOfArray", function() {
    
    it("should take an array of numbers and return the highest value", function() {
        expect( getMaxOfArray([1,2,3]) ).toEqual(3);
        expect( getMaxOfArray([1,2,3]) ).toBeGreaterThan(0);
    });
    
    it("should return the value given if not a typeof Array", function() {
        expect( getMaxOfArray(null) ).toBe(null);
        expect( getMaxOfArray(0) ).toEqual(0);
    });
    
    it("should return NaN If at least one of the arguments cannot be converted to a number.", function() {
        expect( getMaxOfArray(['a','b','c']) ).toEqual(NaN);
    });

});


describe("strUpper", function() {
    
    it("should take a string and return it in all uppercase", function() {
        expect( strUpper('hello') ).toBe('HELLO');        
    });
    
    it("should return the value given if not a typeof string", function() {
        expect( strUpper(null) ).toBe(null);
        expect( strUpper(0) ).toEqual(0);
    });
    
});

*/

describe("changeConvert", function()
{
    it("should convert a change value into the dollar value", function()
    {
        expect( changeConvert("10.03") ).toBe("10");
        expect( changeConvert("0.03") ).toBe("0");
        expect( changeConvert("01.3") ).toBe("1");
    });
});

describe("changeConvertRedemption", function()
{
    it("should convert a change value into the dollar value", function()
    {
        expect( changeConvert("10.03") ).toBe("03");
        expect( changeConvert("0.03") ).toBe("03");
        expect( changeConvert("01.3") ).toBe("30");
    });
});
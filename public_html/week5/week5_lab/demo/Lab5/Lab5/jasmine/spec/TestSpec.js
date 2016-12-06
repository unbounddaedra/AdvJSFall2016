
describe("returnStringtoInt", function() 
{
    
    it("should filter $10.03 to $10", function() 
    {
        expect( returnStringtoInt('10.03') ).toBe(10);
    });
    
    it("should filter $0.03 to $0", function()
     {
        expect( returnStringtoInt('0.03') ).toBe(0);
    });
    
    it("should filter $01.3 to $1", function() 
    {
        expect( returnStringtoInt('01.3') ).toBe(1);
    });
    
 

});


describe("returnStringafterDecimal", function() 
{
    
    it("should filter $10.03 to 03 cents", function() 
    {
        expect( returnStringafterDecimal('10.03') ).toBe('03');
    });
    
    it("should filter $0.03 to 03 cents", function()
     {
        expect( returnStringafterDecimal('0.03') ).toBe('03');
    });
    
    it("should filter $0.3 to 30 cents", function() 
    {
        expect( returnStringafterDecimal('0.3') ).toBe('30');
    });
    
    it("should filter $.3 to 30 cents", function() 
    {
        expect( returnStringafterDecimal('.3') ).toBe('30');
    });
    
    it("should filter $.03 to 03 cents", function() 
    {
        expect( returnStringafterDecimal('.03') ).toBe('03');
    });
    
    it("should filter $0.0 to 00 cents", function() 
    {
        expect( returnStringafterDecimal('0.0') ).toBe('00');
    });
    
    it("should filter $0.00 to 00 cents", function() 
    {
        expect( returnStringafterDecimal('0.00') ).toBe('00');
    });
    
    it("should filter $0.99 to 99 cents", function() 
    {
        expect( returnStringafterDecimal('0.99') ).toBe('99');
    });
    
    it("should filter $0.001 to 00 cents", function() 
    {
        expect( returnStringafterDecimal('0.001') ).toBe('00');
    });
    it("should filter $0.009 to 00 cents", function()
     {
        expect( returnStringafterDecimal('0.009') ).toBe('00');
    });
    
    
    
    
    
    
    
    
    
    
});









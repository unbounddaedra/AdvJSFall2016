/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function sandbox(input, value)
{
  var el;

  beforeEach(function()
  {
    el = document.createElement(input);
    el.classList.add('numbersOnly');
    el.value = value;
    document.body.appendChild(el);
  }); 
  
  
  afterEach(function()
  {
    document.body.removeChild(el);
    el = null;
 });
  }

 


function sandbox1(textdecoration)
{
  var el;

  beforeEach(function()
  {
    el = document.createElement(textdecoration);
    el.style.textDecoration = 'overline';
    el.classList.add('ovClass');
    document.body.appendChild(el);
  });


  afterEach(function()
  {
    document.body.removeChild(el);
    el = null;
 });
 
}


function sandbox2(textdecoration)
{
  var el;

  beforeEach(function()
  {
    el = document.createElement(textdecoration);
    el.style.textDecoration = '';
    el.classList.add('ovClass');
    document.body.appendChild(el);
  });


  afterEach(function()
  {
    document.body.removeChild(el);
    el = null;
 });
 
}





describe("input number only", function()
{
  
  sandbox('div', '123');

  it('should return true if the input box value is only numeric', function()
  {
      var elemContent = inputNumberOnly('div.numbersOnly');
      expect( elemContent ).toBe(true);
     
  });
  
});



describe("input number and string", function()
{
  
sandbox('div', 'abc123');

it('should return false if the input box value is not only numeric', function()
{
      var elemContent = inputNumberOnly('div.numbersOnly');
      expect( elemContent ).toBe(false);
      
  });
  
});

describe("text-decoration set", function()
{
  
  sandbox1('div');

  it('should match overline', function(){
      var elemContent = valueOverline('div.ovClass');
      expect( elemContent ).toEqual('overline');
 
   });
   
   it('should not match none', function()
   {
      var elemContent = valueOverline('div.ovClass');
      expect( elemContent ).not.toEqual('none');
 
   });
   
   it('should not match underline', function()
   {
      var elemContent = valueOverline('div.ovClass');
      expect( elemContent ).not.toEqual('underline');
 
   });
   
   it('should not match line-through', function()
   {
      var elemContent = valueOverline('div.ovClass');
      expect( elemContent ).not.toEqual('line-through');
 
   });
      });
   
   
   
   describe("text-decoration not set", function()
   {
  
  sandbox2('div');

  it('should not match overline', function()
  {
      var elemContent = valueOverline('div.ovClass');
      expect( elemContent ).not.toEqual('overline');
 
   });
   
   it('should not match none', function()
   {
      var elemContent = valueOverline('div.ovClass');
      expect( elemContent ).not.toEqual('none');
 
   });
   
   it('should not match underline', function()
   {
      var elemContent = valueOverline('div.ovClass');
      expect( elemContent ).not.toEqual('underline');
 
   });
   
   it('should not match line-through', function()
   {
      var elemContent = valueOverline('div.ovClass');
      expect( elemContent ).not.toEqual('line-through');
 
   });
   
   
   
   
   
   
   
   
  
});

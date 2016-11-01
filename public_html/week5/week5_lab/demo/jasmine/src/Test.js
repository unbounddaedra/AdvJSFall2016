'use strict';

/* Commented out for reference purposes on the lab
function reverseString(str){
    if ( typeof str !== 'string' ) return str;
    return str.split("").reverse().join("");
}


function getMaxOfArray(numArray) {
    if ( !Array.isArray(numArray) ) return numArray;
    return Math.max.apply(null, numArray);
}

function strUpper(str) {
    
    if(typeof str !== 'string') return str;
    
    return str.toUpperCase();
}
*/

function changeConvert(money)
{
    if ( typeof money !== 'string' ) return money;
    var moneySlice = money.split(".");
    var dollar = moneySlice[0]; 
    return dollar;
    
}
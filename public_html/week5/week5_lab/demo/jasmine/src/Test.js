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

function changeConvert(str)
{
    if ( typeof str !== 'string' ) return str;
    var moneySlice = str.split(".");
    var dollar = moneySlice[0];
    if ((dollar[0] === "0") && (dollar.length === 2 ))
    {
        dollar = dollar.substring(1)
    }
   
    return dollar;
}

function changeConvertRedemption(str)
{
    if ( typeof str !== 'string' ) return str;
    var moneySlice = str.split(".");
    var dollar = moneySlice[1];
    if ((dollar[0] === "0") && (dollar.length === 2 ))
    {
        dollar = dollar.substring(1)
    }
   
    return dollar;
}
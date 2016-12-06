'use strict';


function returnStringtoInt(str){
    if ( typeof str !== 'string' ) return str;
    return parseInt(str);
}

function returnStringafterDecimal(str){
    if ( typeof str !== 'string' ) return str;
    var arrayString = str.split(".");
    var cents = arrayString[1];
    if( cents.length === 3){
        cents = "00";
        
    }
    if( cents.length === 1){
        var centNum = cents[0] * 10;
        cents = centNum.toString();
    }
    
    if( cents.length === 1){
        var centNum = cents[0];
        cents = "00";
    }
    

    
    
//    if( cents.length === 2){
 //       var centNum = cents[0,1];
 //       cents = "00";
 //   }
    
    
    
    return cents;
}





//function getMaxOfArray(numArray) {
//    if ( !Array.isArray(numArray) ) return numArray;
//    return Math.max.apply(null, numArray);
//}


//function strUpper(str) {
//    return str;
//}
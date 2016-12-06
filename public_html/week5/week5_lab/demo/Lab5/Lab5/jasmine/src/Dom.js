
function inputNumberOnly(selector) {
    var elem = document.querySelector(selector);
    return !isNaN(elem.value);    
}


function valueOverline(selector) {
    var elem = document.querySelector(selector);
    return elem.style.textDecoration;    
}

var label = document.querySelector('label');

var textField = document.querySelector('input[name="number"]');
var generateBtn = document.querySelector('#button');

var divToAdd = document.querySelector('div');


var stacks = []; //rows
var items = []; //cols

generateBtn.addEventListener('click', generateGrid );



function randomNumber (min, max)
{
    return Math.floor (Math.random() * (max - min + 1)) + min;
}

function generateGrid()
{
    var gridSize = parseInt(textField.value, 10);
    
    
    /* rows */
    for (var i = 0; i < gridSize; i++) 
    {
        
        
        /* cols */
        for (var j = 0; j < gridSize; j++)
        {
            items[j] = randomNumber(0, 100);
        }
        
        stacks.push(items.slice());
    }
}
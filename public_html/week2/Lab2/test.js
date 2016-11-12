
var textField = document.querySelector('input[name="number"]');
var generateBtn = document.querySelector('input[name="generate"]');

var divToAdd = document.querySelector('div');


var stacks = []; //rows
var items = []; //cols

generateBtn.addEventListener('click', generateGrid);


//function that generates the random number
function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//function that generates the grid
function generateGrid()
{
    var gridSize = parseInt(textField.value);
    var html = '';
    var numOfItems = gridSize * gridSize;
    var sum = 0;
    var average = '';
    html += '<table class="randomGrid">';
    //generation for the rows
    for (var i = 0; i < gridSize; i++)
    {
        html += '<tr>';
        //generation for the cols
        for (var k = 0; k < gridSize; k++)
        {
            
        	//turns the cell red
            items[k] = randomNumber(0, 100);
            if ((items[k] % 3) == 0) {
                html += '<td class="red">';

            
            }
            //turns the cell blue
             else  if ((items[k] % 5) == 0) {
                html += '<td class="blue">';

            
            } 
            //leaves the cell white
            else {
                html += '<td class="white">';

            }
            sum += items[k];
            html += items[k];
            html += '</td>';
        }
        
        

        html += '</tr>';
        


    }
    html += '</table>';
    average += '<label>' + (sum / numOfItems) + '</label>';
    divToAdd.innerHTML += html;
    divToAdd.innerHTML += average;
    
}
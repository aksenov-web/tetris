
let main_field = document.getElementById('main-field');



/*let x = 1;

for (let y = 1; y <= 20; y++)
  {
    cellColorChange(x,y, "blue");
    }
*/

createFigure1(2, 2);
createFigure2(6, 2);
createFigure3(2, 6);
createFigure4(6, 5);
createFigure5(2, 10);
createFigure6(6, 10);
createFigure7(9, 10);

function createFigure1(x, y) {
  cellColorChange(x, y, 'blue');
  cellColorChange(x, y+1, 'blue');
  cellColorChange(x, y+2, 'blue');
  cellColorChange(x, y+3, 'blue');
}

function createFigure2(x, y) {
  cellColorChange(x, y, 'white');
  cellColorChange(x+1, y, 'white');  
  cellColorChange(x+1, y+1, 'white');  
  cellColorChange(x+2, y+1, 'white');
}

function createFigure3(x, y) {
  cellColorChange(x+1, y, 'lightgrey');
  cellColorChange(x, y+1, 'lightgrey');  
  cellColorChange(x+1, y+1, 'lightgrey');  
  cellColorChange(x+2, y, 'lightgrey');
}

function createFigure4(x, y) {
  cellColorChange(x, y, 'red');
  cellColorChange(x+1, y, 'red');  
  cellColorChange(x, y+1, 'red');  
  cellColorChange(x+1, y+1, 'red');
}

function createFigure5(x, y) {
  cellColorChange(x+1, y, 'green');
  cellColorChange(x, y+1, 'green');  
  cellColorChange(x+1, y+1, 'green');  
  cellColorChange(x+2, y+1, 'green');
}

function createFigure6(x, y) {
  cellColorChange(x, y, 'black');
  cellColorChange(x+1, y, 'black');  
  cellColorChange(x, y+1, 'black');  
  cellColorChange(x, y+2, 'black');
}

function createFigure7(x, y) {
  cellColorChange(x, y, 'purple');
  cellColorChange(x+1, y, 'purple');  
  cellColorChange(x+1, y+1, 'purple');  
  cellColorChange(x+1, y+2, 'purple');
}

function cellColorChange(x, y, color) {
  
  let nth = x + (10 * y) - 10;
  let cell = main_field.querySelector('div:nth-child(' + nth + ')');
  
  cell.style.background = color;
  }

/*game objects:
line x,y; x,y+1; x,y+2; x,y+3;
*/

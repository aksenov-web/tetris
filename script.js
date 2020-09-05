
let main_field = document.getElementById('main-field');
let button_field = document.getElementById('button-field');
let main = document.getElementById('main');
let emptyDiv = document.createElement('div');
let scoreboard = document.getElementById('scoreboard');
let resresh_button = document.getElementById('resresh_button');
let fall_rate_up_button = document.getElementById('fall_rate_up_button');
let fall_rate_down_button = document.getElementById('fall_rate_down_button');

resresh_button.addEventListener("click", function() {
  figureManager.refresh();
  });

fall_rate_up_button.addEventListener("click", function() {
  figureManager.fall_rate_up();
  });

fall_rate_down_button.addEventListener("click", function() {
  figureManager.fall_rate_down();
  });

for (let i = 0; i < 200; i++) {
  main_field.appendChild(
    emptyDiv.cloneNode()
  );
    document.getElementById('test-field').appendChild(
    document.createElement('div')
  );
}

figureManager.main_field = main_field;

figureManager.createFigure3(6, 20, 1);
figureManager.valuesReset();
figureManager.figureFall(1);



document.addEventListener("keydown", function (e) {
  console.log(e.code);
  e.preventDefault();
  switch (e.code) {
    case "ArrowLeft":
      figureManager.figureLeft();
    break;
    case "ArrowRight":
      figureManager.figureRight();
    break;
    case "Space":
      figureManager.figureRotate();
    break;
    case "ArrowDown":
      figureManager.figureDrop();
    break;
  }
});

scoreboard.value = 0;




//figureManager.createFigure1(8, 5, 1);



//figureManager.createFigure1(5, 4, 1);
//figureManager.createFigure2(5, 3, 1);
//figureManager.createFigure3(2, 3, 1);
//figureManager.createFigure4(5, 2, 1);
//figureManager.createFigure5(5, 3, 1);
//figureManager.createFigure6(5, 3, 4);
//figureManager.createFigure7(5, 3, 4);

/*
figureManager.main_field = document.getElementById('test-field');
figureManager.createFigure1(5, 4, 1);
//figureManager.createFigure2(5, 3, 1);
//figureManager.createFigure3(2, 3, 1);
//figureManager.createFigure4(5, 2, 1);
//figureManager.createFigure5(5, 3, 1);
//figureManager.createFigure6(5, 3, 4);
//figureManager.createFigure7(5, 3, 4);
*/

// object
/*let cars = {
  audi: {
    model: 32,
    gas: 324
  },
  subaru: 2255,
  getColor: function (color) {;
    return "This is color is " + color;

  }
};

console.log(cars.getColor("black"));
/*


// prototype
let cars = function() {
  this.specification = {
    model: 32,
    gas: 324
  };
};

let audi = new cars();
audi.specification.gas = "diesel";
console.log(audi.specification);

let bmw = new cars();
bmw.specification.gas = "gasoline";
console.log(bmw.specification);

/*game objects:
line x,y; x,y+1; x,y+2; x,y+3;
*/


let main_field = document.getElementById('main-field');
let emptyDiv = document.createElement('div');


document.addEventListener("keydown", function (e) {
  console.log(e.code);
  switch (e.code) {
    case "ArrowLeft":
      figureManager.figureLeft(3);
      console.log(figureManager.figureLeft);
    break;
    case "ArrowRight":
      figureManager.figureRight(3);
      console.log(figureManager.figureRight);
      console.log("To the right!");
    break;
    case "Space":
      console.log("Rotation");
    break;
    case "ArrowDown":

      console.log("Fast Fall");
    break;
  }

});

/*
* Add empty div tags
*/
for (let i = 0; i < 200; i++) {
  main_field.appendChild(
    emptyDiv.cloneNode()
  );
    document.getElementById('test-field').appendChild(
    document.createElement('div')
  );

}

figureManager.main_field = main_field;
figureManager.createFigure1(8, 5, 1);



//figureManager.figureFall(0);


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

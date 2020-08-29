let figureManager = {
  main_field: null,
  x: 0,
  y: 0,
  r: 1,
  x_fall: 5,
  y_fall: 1,
  r_fall: 1,
  fall_rate: 300,
  fall_state: true,
  move_state: true,
  color: "",



  figureFall: function(y){
    let obj = this;
    setTimeout(function(){
      if (obj.fall_state) {
//       obj.createFigure1(obj.x_fall, obj.y_fall++, obj.r_fall);
        obj.createFigure2(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure3(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure4(obj.x_fall, obj.y_fall++, obj.r_fall);
//          obj.createFigure5(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure6(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure7(obj.x_fall, obj.y_fall++, obj.r_fall);
        obj.figureFall(y);
      }
      //if (obj.y_fall == 20) {
      //  alert("Bottom is reached");
      //  console.log("x= " + x + "y= " + y + "r= " + r);
      //}
    }, obj.fall_rate);
},

  figureLeft: function(){
    if (this.x_fall > 1) {
      this.createFigure2(--this.x_fall, this.y, this.r_fall);
    }
  },

  figureRight: function(){
    if (this.move_state) {
     this.createFigure2(++this.x_fall, this.y, this.r_fall);
    }
  },

  figureRotate: function(){
    if (this.r_fall <= 4) {
      this.color = ""
     this.createFigure2(this.x, this.y, ++this.r_fall);
    }
    else {
      this.r_fall = 1;
      this.figureRotate();
    }
  },

figureDrop: function(){
  this.fall_rate = -10000;
},

refresh: function(){
  location.reload();
},

fall_rate_up: function(){
  this.fall_rate = this.fall_rate - 400;
  let scoreboard = document.getElementById('scoreboard');
  scoreboard.value = this.fall_rate;
  console.log(this.fall_rate);
},

fall_rate_down: function(){
  this.fall_rate = this.fall_rate + 400;
  let scoreboard = document.getElementById('scoreboard');
  scoreboard.value = this.fall_rate;
},

    //палка
  createFigure1: function (x, y, r) {
    let color = "";

    for (let n = 1; n <= 2; n++) {
       if (n == 1) {
        color = "";
       }
      else {
        color = "aqua";
      }
        this.cellColorChange(this.x, this.y, color);
      switch (r) {
        case 1:
        case 3:
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x, --this.y, color);
        break;
        case 2:
        case 4:
          this.cellColorChange(++this.x, this.y, color);
          this.cellColorChange(++this.x, this.y, color);
          this.cellColorChange(++this.x, this.y, color);
        break;
      }
      this.x = x;
      this.y = y;
    }
  },

    // z
  createFigure2: function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
      if (n == 1) {
        color = "";
      }
      else {
        color = "red";
      }

    switch(r) {
      case 1:
      case 3:
        let coord = [
        [this.x, this.y-1],
        [++this.x, this.y-1],
        [this.x, this.y],
        [++this.x, this.y]
        ];
        if (this.validate(coord)) {
        this.cellColorChange(coord[0][0], coord[0][1], color);
        this.cellColorChange(coord[1][0], coord[1][1], color);
        this.cellColorChange(coord[2][0], coord[2][1], color);
        this.cellColorChange(coord[3][0], coord[3][1], color);
          console.log(coord);
        }
      break;
      case 2:
      case 4:
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(this.x, --this.y, color);
        this.cellColorChange(++this.x, this.y, color);
        this.cellColorChange(this.x, --this.y, color);
      break;
    }
    this.x = x;
    this.y = y;
    }
  },

    // backward z
   createFigure3: function (x, y, r) {
     let color = "";
     for (let n = 1; n <= 2; n++) {
       if (n == 1) {
        color = "";
       }
      else {
        color = "green";
      }
    switch(r) {
      case 1:
      case 3:
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(++this.x, this.y, color);
        this.cellColorChange(this.x, --this.y, color);
        this.cellColorChange(++this.x, this.y, color);
      break;
      case 2:
      case 4:
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x+1, --this.y, color);
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(this.x, --this.y, color);
      break;
    }
        this.x = x;
        this.y = y;
    }
  },

    // square
  createFigure4:  function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
       if (n == 1) {
        color = "";
       }
      else {
        color = "yellow";
      }
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x, this.y-1, color);
        this.cellColorChange(this.x+1, this.y-1, color);
      this.x = x;
      this.y = y;
    }

    },

  // T
  createFigure5: function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
       if (n == 1) {
        color = "";
       }
      else {
        color = "purple";
      }
    switch(r) {
      case 1:
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x+2, this.y, color);
        this.cellColorChange(this.x+1, this.y-1, color);
      break;
      case 2:
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x+1, this.y-1, color);
        this.cellColorChange(++this.x, this.y-2, color);
        this.cellColorChange(++this.x, this.y-1, color);
      break;
      case 3:
        this.cellColorChange(this.x, this.y-1, color);
        this.cellColorChange(this.x+1, this.y-1, color);
        this.cellColorChange(this.x+2, this.y-1, color);
        this.cellColorChange(this.x+1, this.y, color);
      break;
      case 4:
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x+1, this.y-1, color);
        this.cellColorChange(this.x+1, this.y-2, color);
        this.cellColorChange(this.x, this.y-1, color);
      break;
    }
        this.x = x;
        this.y = y;
    }
  },

  // г
  createFigure6: function (x, y, r) {
    let color = "";

    for (let n = 1; n <= 2; n++) {
       if (n == 1) {
        color = "";
       }
      else {
        color = "blue";
      }
      switch(r) {
        case 1:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x+1, this.y, color);
        break;
        case 2:
          this.cellColorChange(this.x, this.y-1, color);
          this.cellColorChange(++this.x, this.y-1, color);
          this.cellColorChange(++this.x, this.y-1, color);
          this.cellColorChange(this.x, this.y, color);
        break;
        case 3:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(++this.x, this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x, --this.y, color);
        break;
        case 4:
          this.cellColorChange(this.x, this.y-1, color);
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x+1, this.y, color);
          this.cellColorChange(this.x+2, this.y, color);
        break;
      }
        this.x = x;
        this.y = y;
    }
  },

  // обратная г
  createFigure7: function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
       if (n == 1) {
        color = "";
       }
      else {
        color = "orange";
      }
      switch(r) {
        case 1:
          this.cellColorChange(this.x, this.y-2, color);
          this.cellColorChange(this.x+1, this.y-2, color);
          this.cellColorChange(this.x+1, this.y-1, color);
          this.cellColorChange(this.x+1, this.y, color);
        break;
        case 2:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x+1, this.y, color);
          this.cellColorChange(this.x+2, this.y, color);
          this.cellColorChange(this.x+2, this.y-1, color);
        break;
        case 3:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x+1, this.y, color);
          this.cellColorChange(this.x, this.y-1, color);
          this.cellColorChange(this.x, this.y-2, color);
        break;
        case 4:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x, this.y-1, color);
          this.cellColorChange(this.x+1, this.y-1, color);
          this.cellColorChange(this.x+2, this.y-1, color);
        break;
      }
        this.x = x;
        this.y = y;
    }
  },


  cellColorChange: function (x, y, color, r) {
    if (x == 10) {
      this.move_state = false;
      console.log("Right side!");
    }
    else {
      this.move_state = true;
    }
    if (y == 20) {
      this.fall_state = false;
      console.log("Bikini Bottom");
    }

    let nth = x + (10 * y) - 10;
    let cell = this.main_field.querySelector('div:nth-child(' + nth + ')');



    if (y < 1 || y > 20 || x < 1 || x >10) {
      return;
    }

    if (color == '') {
      cell.classList.remove("filled");
    }
    else if (cell.className == "filled") {
      this.fall_state = false;
    }
    else {
      cell.classList.add("filled");
    }

    cell.style.background = color;
  },

  valuesReset: function() {
    this.x = 0;
    this.y = 0;
    this.r = 1;
    this.x_fall = 5;
    this.y_fall = 1;
    this.r_fall = 1;
    this.fall_rate = 300;
    this.fall_state = true;
    this.move_state = true;
  },
  validate: function(coord) {
    return true;
  }

}

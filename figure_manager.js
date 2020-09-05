let figureManager = {
  main_field: null,
  x: 0,
  y: 0,
  r: 1,
  x_fall: 5,
  y_fall: 1,
  r_fall: 1,
  fall_rate: 1000,
  fall_state: true,
  move_state: true,
  color: "",
  figure: this.createFigure1,




  figureFall: function(y){
    let obj = this;
    setTimeout(function(){
      if (obj.fall_state) {
       obj.createFigure1(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure2(obj.x_fall, obj.y_fall++, obj.r_fall);
//    obj.createFigure3(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure4(obj.x_fall, obj.y_fall++, obj.r_fall);
//          obj.createFigure5(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure6(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure7(obj.x_fall, obj.y_fall++, obj.r_fall);
        obj.figureFall(y);
      }

    }, obj.fall_rate);
  },

  figureLeft: function(){
    if (this.x_fall > 1) {
      this.createFigure1(--this.x_fall, this.y, this.r_fall);
    }
  },

  figureRight: function(){
    if (this.move_state) {
     this.createFigure1(++this.x_fall, this.y, this.r_fall);
    }
  },

  figureRotate: function(){
    if (this.r_fall < 4) {
     ++this.r_fall;
    }
    else {
      this.r_fall = 1;
    }
    this.createFigure1(this.x, this.y, this.r_fall);
  },

  figureDrop: function(){
    this.fall_rate = -10000;
  },

  refresh: function(){
    location.reload();
  },

  fall_rate_up: function(){
    this.fall_rate = this.fall_rate - 300;
    let scoreboard = document.getElementById('scoreboard');
    scoreboard.value = (0 + (-this.fall_rate / 300));

  },

  fall_rate_down: function(){
    this.fall_rate = this.fall_rate + 300;
    let scoreboard = document.getElementById('scoreboard');
    scoreboard.value = (0 - (this.fall_rate / 300));
  },

    //палка
  createFigure1: function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
      if (n == 2) {
        color = "aqua";
      }
    let coords = [];
        switch (this.r) {
          case 1:
          case 3:
            coords = [
              [this.x, this.y],
              [this.x, --this.y],
              [this.x, --this.y],
              [this.x, --this.y]
            ];
          break;
          case 2:
          case 4:
            coords = [
              [this.x, this.y],
              [++this.x, this.y],
              [++this.x, this.y],
              [++this.x, this.y]
            ];
          break;
        }
        if (n == 2) {
          this.validate(coords);
          this.validate_x(coords);

        }

        for (coord of coords) {
          this.cellColorChange(coord[0], coord[1], color);
        }

      this.x = x;
      this.y = y;
      this.r = r;
    }
  },

    // z
  createFigure2: function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
      if (n == 2) {
        color = "red";
      }
    let coords = [];
    switch(this.r) {
      case 1:
        coords = [
        [this.x, this.y-1],
        [++this.x, this.y-1],
        [this.x, this.y],
        [++this.x, this.y]
        ];
      break;
      case 2:
        coords = [
        [this.x, this.y],
        [this.x, --this.y],
        [++this.x, this.y],
        [this.x, --this.y]
        ];
      break;
      case 3:
        coords = [
        [this.x, this.y-1],
        [++this.x, this.y-1],
        [this.x, this.y],
        [++this.x, this.y]
        ];
      break;
      case 4:
        coords = [
        [this.x, this.y],
        [this.x, --this.y],
        [++this.x, this.y],
        [this.x, --this.y]
        ];
      break;
    }

    if (n == 2) {
      this.validate(coords);
    }

    for (coord of coords) {
        this.cellColorChange(coord[0], coord[1], color);
    }

    this.x = x;
    this.y = y;
    this.r = r;
    }
  },

    // backward z
   createFigure3: function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
      if (n == 2) {
        color = "green";
      }
      let coords = [];
      switch(this.r) {
        case 1:
        case 3:
          coords = [
            [this.x, this.y],
            [++this.x, this.y],
            [this.x, --this.y],
            [++this.x, this.y]
          ];
        break;
        case 2:
        case 4:
          coords = [
            [this.x+1, this.y],
            [this.x+1, --this.y],
            [this.x, this.y],
            [this.x, --this.y]
          ];
        break;
      }
      if (n == 2) {
        this.validate(coords);
      }

      for (coord of coords) {
        this.cellColorChange(coord[0], coord[1], color);
      }
      this.x = x;
      this.y = y;
      this.r = r;
    }
  },

    // square
  createFigure4:  function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
      if (n == 2) {
        color = "yellow";
      }
      coords = [
        [this.x, this.y],
        [this.x+1, this.y],
        [this.x, this.y-1],
        [this.x+1, this.y-1]
      ];
      if (n == 2) {
        this.validate(coords);
      }
      for (coord of coords) {
        this.cellColorChange(coord[0], coord[1], color);
      }
      this.x = x;
      this.y = y;
      this.r = r;
    }
  },

  // T
  createFigure5: function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
      if (n == 2) {
        color = "purple";
      }
    let coords = [];
    switch(this.r) {
      case 1:
        coords = [
              [this.x, this.y],
              [this.x+1, this.y],
              [this.x+2, this.y],
              [this.x+1, this.y-1]
            ];
      break;
      case 2:
        coords = [
              [this.x+1, this.y],
              [this.x+1, this.y-1],
              [++this.x, this.y-2],
              [++this.x, this.y-1]
            ];
      break;
      case 3:
        coords = [
              [this.x, this.y-1],
              [this.x+1, this.y-1],
              [this.x+2, this.y-1],
              [this.x+1, this.y]
            ];
      break;
      case 4:
        coords = [
              [this.x+1, this.y],
              [this.x+1, this.y-1],
              [this.x+1, this.y-2],
              [this.x, this.y-1]
            ];
      break;
    }
       if (n == 2) {
          this.validate(coords);
        }

        for (coord of coords) {
            this.cellColorChange(coord[0], coord[1], color);
          }
        this.x = x;
        this.y = y;
      this.r = r;
    }
  },

  // г
  createFigure6: function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
      if (n == 2) {
        color = "blue";
      }
    let coords = [];
      switch(this.r) {
        case 1:
          coords = [
              [this.x, this.y],
              [this.x, --this.y],
              [this.x, --this.y],
              [this.x+1, this.y]
            ];
        break;
        case 2:
          coords = [
              [this.x, this.y-1],
              [++this.x, this.y-1],
              [++this.x, this.y-1],
              [this.x, this.y]
            ];
        break;
        case 3:
          coords = [
              [this.x, this.y],
              [++this.x, this.y],
              [this.x, --this.y],
              [this.x, --this.y]
            ];
        break;
        case 4:
          coords = [
              [this.x, this.y-1],
              [this.x, this.y],
              [this.x+1, this.y],
              [this.x+2, this.y]
            ];
        break;
      }
      if (n == 2) {
          this.validate(coords);
        }

        for (coord of coords) {
            this.cellColorChange(coord[0], coord[1], color);
          }
        this.x = x;
        this.y = y;
        this.r = r;
    }
  },

  // обратная г
  createFigure7: function (x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
      if (n == 2) {
        color = "orange";
      }
    let coords = [];
      switch(this.r) {
        case 1:
          coords = [
              [this.x, this.y-2],
              [this.x+1, this.y-2],
              [this.x+1, this.y-1],
              [this.x+1, this.y]
            ];
        break;
        case 2:
          coords = [
              [this.x, this.y],
              [this.x+1, this.y],
              [this.x+2, this.y],
              [this.x+2, this.y-1]
            ];
        break;
        case 3:
          coords = [
              [this.x, this.y],
              [this.x+1, this.y],
              [this.x, this.y-1],
              [this.x, this.y-2]
            ];
        break;
        case 4:
          coords = [
              [this.x, this.y],
              [this.x, this.y-1],
              [this.x+1, this.y-1],
              [this.x+2, this.y-1]
            ];
        break;
      }
       if (n == 2) {
          this.validate(coords);
        }

        for (coord of coords) {
            this.cellColorChange(coord[0], coord[1], color);
          }
        this.x = x;
        this.y = y;
        this.r = r;
    }
  },


  cellColorChange: function (x, y, color, r) {
    if (this.x >= 10) {
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
    this.fall_rate = 1000;
    this.fall_state = true;
    this.move_state = true;
  },

  validate_x: function(coords) {
    for (coord of coords) {
      let x = coord[0];
      if (x > 10) {
        this.x_fall = --this.x_fall;
        this.move_state = false;
      }
  }
  },

  validate: function(coords) {
    for (coord of coords) {
      let x = coord[0],
          y = coord[1]+1;

      if (y < 1 || y > 20 || x < 1 || x >10) {
        return true;
    }
      let nth = x + (10 * y) - 10;
      let cell = this.main_field.querySelector('div:nth-child(' + nth + ')');

      if (cell.className == "filled") {
      this.fall_state = false;
      return false;
    }
    }
    return true;
  }

}

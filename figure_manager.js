let figureManager = {
  main_field: null,
  x: 0,
  y: 3,
  r: 1,
  x_fall: 5,
  y_fall: 1,
  r_fall: 1,
  fall_rate: 800,


  figureFall: function(){
    let obj = this;
    setTimeout(function(){
      if (obj.y_fall <=20) {
//       obj.createFigure1(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure2(obj.x_fall, obj.y_fall++, obj.r_fall);
        obj.createFigure3(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure4(obj.x_fall, obj.y_fall++, obj.r_fall);
//          obj.createFigure5(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure6(obj.x_fall, obj.y_fall++, obj.r_fall);
//        obj.createFigure7(obj.x_fall, obj.y_fall++, obj.r_fall);
        obj.figureFall();
      }
    }, obj.fall_rate);
},
  figureLeft: function(){
    if (this.x_fall > 1) {
      this.createFigure3(--this.x_fall, this.y, this.r_fall);
    }
  },

  figureRight: function(){
    if (this.x_fall < 10) {
     this.createFigure3(++this.x_fall, this.y, this.r_fall);
    }
  },

  figureRotate: function(){
    if (this.r_fall <= 4) {
     this.createFigure3(this.x, this.y, ++this.r_fall);
    }
    else {
      this.r_fall = 1;
      this.figureRotate();
    }
  },

figureDrop: function(){
  this.fall_rate = 0;
},

refresh: function(){
  location.reload();
},

fall_rate_up: function(){
  this.fall_rate = this.fall_rate - 200;
},

fall_rate_down: function(){
  this.fall_rate = this.fall_rate + 200;
},

    //палка
  createFigure1: function (x, y, r) {
    let color = "";

    for (let n = 1; n <= 2; n++) {
       if (n == 1) {
        color = "";
       }
      else {
        color = "aqua"
      }
        this.cellColorChange(this.x, this.y, color);
      switch (r) {
        case 1:
        case 3:
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.x = x;
          this.y = y;
        break;
        case 2:
        case 4:
          this.cellColorChange(++this.x, this.y, color);
          this.cellColorChange(++this.x, this.y, color);
          this.cellColorChange(++this.x, this.y, color);
          this.x = x;
          this.y = y;
        break;
      }
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
        color = "red"
      }
    switch(r) {
      case 1:
      case 3:
        this.cellColorChange(this.x, this.y-1, color);
        this.cellColorChange(++this.x, this.y-1, color);
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(++this.x, this.y, color);
        this.x = x;
        this.y = y;
      break;
      case 2:
      case 4:
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(this.x, --this.y, color);
        this.cellColorChange(++this.x, this.y, color);
        this.cellColorChange(this.x, --this.y, color);
        this.x = x;
        this.y = y;
      break;
    }
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
        color = "green"
      }
    switch(r) {
      case 1:
      case 3:
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(++this.x, this.y, color);
        this.cellColorChange(this.x, --this.y, color);
        this.cellColorChange(++this.x, this.y, color);
        this.x = x;
        this.y = y;
      break;
      case 2:
      case 4:
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x+1, --this.y, color);
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(this.x, --this.y, color);
        this.x = x;
        this.y = y;
      break;
    }
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
        color = "yellow"
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
        color = "purple"
      }
    switch(r) {
      case 1:
        this.cellColorChange(this.x, this.y, color);
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x+2, this.y, color);
        this.cellColorChange(this.x+1, this.y-1, color);
        this.x = x;
        this.y = y;
      break;
      case 2:
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x+1, this.y-1, color);
        this.cellColorChange(++this.x, this.y-2, color);
        this.cellColorChange(++this.x, this.y-1, color);
        this.x = x;
        this.y = y;
      break;
      case 3:
        this.cellColorChange(this.x, this.y-1, color);
        this.cellColorChange(this.x+1, this.y-1, color);
        this.cellColorChange(this.x+2, this.y-1, color);
        this.cellColorChange(this.x+1, this.y, color);
        this.x = x;
        this.y = y;
      break;
      case 4:
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x+1, this.y-1, color);
        this.cellColorChange(this.x+1, this.y-2, color);
        this.cellColorChange(this.x, this.y-1, color);
        this.x = x;
        this.y = y;
      break;
    }
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
        color = "blue"
      }
      switch(r) {
        case 1:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x+1, this.y, color);
          this.x = x;
          this.y = y;
        break;
        case 2:
          this.cellColorChange(this.x, this.y-1, color);
          this.cellColorChange(++this.x, this.y-1, color);
          this.cellColorChange(++this.x, this.y-1, color);
          this.cellColorChange(this.x, this.y, color);
          this.x = x;
          this.y = y;
        break;
        case 3:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(++this.x, this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.cellColorChange(this.x, --this.y, color);
          this.x = x;
          this.y = y;
        break;
        case 4:
          this.cellColorChange(this.x, this.y-1, color);
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x+1, this.y, color);
          this.cellColorChange(this.x+2, this.y, color);
          this.x = x;
          this.y = y;
        break;
      }
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
        color = "orange"
      }
      switch(r) {
        case 1:
          this.cellColorChange(this.x, this.y-2, color);
          this.cellColorChange(this.x+1, this.y-2, color);
          this.cellColorChange(this.x+1, this.y-1, color);
          this.cellColorChange(this.x+1, this.y, color);
          this.x = x;
          this.y = y;
        break;
        case 2:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x+1, this.y, color);
          this.cellColorChange(this.x+2, this.y, color);
          this.cellColorChange(this.x+2, this.y-1, color);
          this.x = x;
          this.y = y;
        break;
        case 3:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x+1, this.y, color);
          this.cellColorChange(this.x, this.y-1, color);
          this.cellColorChange(this.x, this.y-2, color);
          this.x = x;
          this.y = y;
        break;
        case 4:
          this.cellColorChange(this.x, this.y, color);
          this.cellColorChange(this.x, this.y-1, color);
          this.cellColorChange(this.x+1, this.y-1, color);
          this.cellColorChange(this.x+2, this.y-1, color);
          this.x = x;
          this.y = y;
        break;
      }
    }
  },


  cellColorChange: function (x, y, color, r) {
    if (y < 1 || y > 20 || x < 1 || x >10) {
      return;
    }

    let nth = x + (10 * y) - 10;

    let cell = this.main_field.querySelector('div:nth-child(' + nth + ')');
    cell.style.background = color;

  }
}

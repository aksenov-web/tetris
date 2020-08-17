let figureManager = {
  main_field: null,
  x: 0,
  y: 3,
  x_fall: 5,
  y_fall: 1,


  figureFall: function(){
    let obj = this;
    setTimeout(function(){
      if (obj.y_fall <=20) {
       obj.createFigure1(obj.x_fall, obj.y_fall++, 1);
//        obj.createFigure2(5, y++, 1);
//        obj.createFigure3(5, y++, 1);
//        obj.createFigure4(5, y++, 1);
//        obj.createFigure5(5, y++, 1);
//        obj.createFigure6(5, y++, 1);
//        obj.createFigure7(5, y++, 2);
        obj.figureFall();
      }
    }, 500);
},
figureLeft: function(){
   this.createFigure1(--this.x_fall, this.y, 1);
},

figureRight: function(){
   this.createFigure1(++this.x_fall, this.y, 1);
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
        this.cellColorChange(this.x+1, this.y, color);
        this.cellColorChange(this.x+1, this.y-1, color);
        this.cellColorChange(this.x+1, this.y-2, color);
        this.cellColorChange(this.x, this.y-1, color);
        this.x = x;
        this.y = y;
      break;
      case 4:
        this.cellColorChange(this.x, this.y-1, color);
        this.cellColorChange(this.x+1, this.y-1, color);
        this.cellColorChange(this.x+2, this.y-1, color);
        this.cellColorChange(this.x+1, this.y, color);
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

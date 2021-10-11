'use strict'

 class AreaRectangulo {
     base = prompt('Introduce la base del rectangulo');
     altura = prompt('Introduce la altúra del rectangulo');
     constructor(base, altura) {
         //this.base = base;
         //this.altura = altura;
         this.calArea();

     }
  calArea(){
          return document.write(this.base * this.altura);
  }

 }

 new AreaRectangulo();


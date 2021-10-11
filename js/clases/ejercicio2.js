'use strict'

class AreaCirculo{
    radio = prompt('Introduce el radio del ciruclo en cm');
    constructor(radio) {
        this.culcularArea();
    }

    culcularArea(){
        this.radio = this.radio * this.radio;
        return document.write('El area es:'+(3.14 * this.radio)+'cm');
    }


}

new  AreaCirculo();
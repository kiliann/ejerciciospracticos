'use strict'

import {AreaCirculo} from './ejercicio2';

class VolumenDelCilindro {
    altura = prompt('Introduce la altura del cilindro');
    //radio = prompt('Introcude el radio de la circunferencia del cilindro');
    constructor(altura) {

        this.calcularVolumen();

    }


    calcularVolumen(){
        //let radio = new AreaCirculo(radio);
        let radioCudrado = AreaCirculo.prototype.radio * AreaCirculo.prototype.radio;
        document.write((3.14 * radioCudrado * this.altura));

    }
}

new VolumenDelCilindro();
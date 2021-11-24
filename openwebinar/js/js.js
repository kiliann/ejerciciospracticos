'use strict'
console.log('iniciando...');



let jugador = {
    fuerza: 1,
    incrementarFuerza: function (){
        this.fuerza += 1;
        //this.fuerza = this.fuerza + 1;
    },
    consultarFuerza: function (){
        console.log("Tu fuerza es de:" + this.fuerza);
    }


};

jugador.consultarFuerza();

jugador.incrementarFuerza();

jugador.consultarFuerza();
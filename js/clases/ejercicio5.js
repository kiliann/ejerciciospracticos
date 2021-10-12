'use strict'

class Edificio {

    constructor() {
        this.numPlantas;
        this.numHabitaciones;
        this.susperficie;
    }
}

class Casa extends Edificio{
    constructor() {
        super();
        this.numDormitorios;
        this.numBaños;
    }

}
class Oficina extends Edificio{
    constructor() {
        super();
        this.numExtintores;
        this.numTelefonos;
    }

}
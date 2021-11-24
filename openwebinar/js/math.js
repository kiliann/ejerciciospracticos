'use strict'
console.log('iniciando ....');

let pi = Math.PI;

console.log(pi);

console.log(Math.min(1,2,2,3,-5,546,-10));
console.log(Math.max(1,2,2,3,-5,546,-10));
console.log(Math.round(4.5));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.2));

let aleatorio = Math.random();

console.log("Numero Randon  " + aleatorio);

function generarNumero(numeroMaximo){
    return Math.round(Math.random()*numeroMaximo);

}

console.log("Numero aletorio entero: "+generarNumero(100));
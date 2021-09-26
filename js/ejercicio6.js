'use strict'

let numero1 = prompt('Introduce un numero')
let numero2 = prompt('Introduce un numero')


if(numero1 > numero2){
  document.write(numero1,' es el numero 1 mayor')
}else if (numero1 < numero2) {
  document.write(numero2,' es el numero 2 mayor')
}else {
  document.write('son los dos iguales')
}

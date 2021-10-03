'use strict'
let cadena = prompt('Introduce una frase')

let cadena2 =cadena.match(/[aeiouáéíóú]/gi).length;
document.write(cadena2)

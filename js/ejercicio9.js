'use strict'

let cadena = prompt('Introduce una frase')

let cadena2 =cadena.match(/[aá]/gi).length;
document.write(cadena2)

'use strict'

let frase = prompt('Dime una frase...')
let expresion = /[aeiouáéíóú]/gi ;
let cadena1 = frase.match(expresion)

for (var i = 0; i < frase.length; i++) {
  document.write()
  if(frase[i].match(expresion))
    document.write(frase[i])
}

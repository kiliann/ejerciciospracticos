'use strict'

class Alumnos {
  nombreComplet = prompt('Introduce nombre Completo');
  cursoActual = prompt('Introduce curos Actual');
   nota1 = prompt('Introduce la  nota 1');
   nota2 = prompt('Introduce la nota 2');
   nota3 = prompt('Introduce la nota tres');
    constructor(nota1, nota2, nota3, nombreComplet) {
        this.mostraNombre();
        this.media();

    }
    media(){
        let sumanotas = parseInt(this.nota1) + parseInt(this.nota2) + parseInt(this.nota3);
        return document.write(sumanotas / 3);
    }

    mostraNombre(){
        return document.write('Nombre del alumno: '+this.nombreComplet+' y la media es:   ');
    }
}

new Alumnos();
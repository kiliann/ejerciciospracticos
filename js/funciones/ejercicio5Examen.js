'use strict'

//document.write(hora);

function mensaje() {
    var hoy = new Date();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();


    return document.write(hora);
}
document.write(setTimeout("mensaje()", 1000));
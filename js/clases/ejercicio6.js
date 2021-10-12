'user strict'


class Personas {
     constructor() {
         this.nombre;
         this.direccion;
         this.fechaNacimiento;
         this.sexo;

         this.datos();
     }
     datos(){
         this.nombre = prompt('Introdue el Nombre');
         this.direccion = prompt('Introduzca su direccion');
         this.fechaNacimiento = prompt('Su fecha de Nacimeinto');
         this.sexo = prompt('Sexo al que pertence');

         document.write('<p>Nombre:  '+this.nombre+'</p></br>  <p>Dirección: '+this.direccion+'</p></br><p>Fecha de nacimiento: '+this.fechaNacimiento+'</p><br/><p>Sexo'+this.sexo+'</p>')
     }

}

class Empleado extends Personas{

}

class Directivo extends Empleado{

}

new Personas();
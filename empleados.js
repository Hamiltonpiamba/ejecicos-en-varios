class Empleados {
   constructor(nombre, apellido, documento) {         

  this.nombre=nombre;
this.apellido=apellido;
this.modelo=modelo;
this. documento= documento


}
nombre2(){

console.log("mi nombre es " + this.nombre + this.apellido )
}
escribirnombre(){

  return nombre
}
}

class ubicacion extends Empleados {

    constructor(nombre, apellido, documento){
        super(nombre, apellido, documento)
        this.direccion=direccion;
        this.municipio=municipio;
        this.pais=pais
     }
     ubicacion(){

          console.log("la ubicacion" + this.direccion +  this.municipio + this.pais )

     }
      ubicacioncom(){

        return this.direccion
      }
    }

var ub = new Empleados ( "julio", "ramirez", "1252925495", "cll25", "jamundi","colombia")

console.log(ub)

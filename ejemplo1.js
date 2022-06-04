
function Persona(nombre){

    this.nombre= nombre;
    this.saludar = function(){

        alert("hola mo nombre es" + this.nombre + " . ")
    }
}
var persona1 = new Persona("Bob");
var persona2 = new Persona("sarah");
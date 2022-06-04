class Persona {
constructor(nombre, edad, id){
    this.nombre=nombre;
    this.edad=edad;
    this.id=id
}

 set crearnombre(nombretal){

     this.nombre=nombretal
   
 }
get mostrarnombre(){
    return this.nombre
    
}
set crearedad(edadaños){

    this.edad=edadaños
}
get mostraredad (){
    return this.edad
}
set escribirid(identificacion){
  this.id=identificacion
}
get mostrar (){
return this.id
}

saludar(){
    console.log("hola soy " + this.nombre+ " con identificacion " + this.id + " y tengo " + this.edad + " años")
    }
   mayordeedad(){
    if (this.edad >= 18){
  console.log("soy mayor de edad")
    }

   } 
   


}
var b = new Persona ("robinson", "18","10256484")
 var c = new Persona("sara","7","123652")

console.log(b.saludar())


console.log(c.saludar())


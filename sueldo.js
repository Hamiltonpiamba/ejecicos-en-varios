
// Declaración de variables

let a = prompt("escriba el nombre")
let b = parseInt(prompt("horas trabajdas"))
let c = parseInt(prompt("tarifa"))

let salarioBruto = b*c
let impuestos = (salarioBruto - 2000) * 0.20
let salarioNeto = (salarioBruto - impuestos)



 if(b <= 35){

    console.log("El salario bruto  es : ",salarioBruto)


 }else{

     salarioBruto = (35* c) + (b - 35) *1.5 * c

     console.log("salario con horas extras ",+salarioBruto)
 }
 if(salarioBruto <= 2000){
 impuestos = 0
console.log("no paga impuesto")
 }else{
 if((salarioBruto > 2000) ){


 impuestos = (salarioBruto - 2000) * 0.20
console.log("paga de impuesto",+impuestos)
 }else{
     impuestos

 }

 }
 

 salarioNeto = salarioBruto - impuestos


 console.log("el salario neto de "+ a + " es de " + salarioNeto)










// declaramos variables 

let n = parseInt(prompt("numero = "))
let r 
let m
let lista  = []

do {

r = parseInt( n / 2 )

m = n % 2  //calculamos el residuo de la division 

n = r

lista.push(m) // agregamos el modulo a la lsita 


} while ( r > 0 )

lista.reverse() // invertimos la lista 
console.log ("El resultado de la conversion es : " + lista)
























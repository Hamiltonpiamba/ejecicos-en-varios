// lista de numeros orden descendiente



let a = parseInt(prompt("escriba el primer numero "))
let b = parseInt(prompt("escriba el segundo numero "))
let c = parseInt(prompt("escriba el tercer numero "))

if(a>b && b>c){

    console.log("los numeros ingresados son: ",+a,","+b,","+c," los numeros ya estan organizados de forma descendente",)
}
if(a>c && c>b){

    console.log("los numeros ingresados son: ",+a,","+b,","+c," y organizados de forma descendente son: ",+a,","+c,","+b,)
}
if(c>a && a>b){

    console.log("los numeros ingresados son: ",+a,","+b,","+c," y organizados de forma descendente son: ",+c,","+a,","+b,)
}
if(c>b && b>a){

    console.log("los numeros ingresados son: ",+a,","+b,","+c," y organizados de forma descendente son: ",+c,","+b,","+a,)
}
if(b>c && c>a){

    console.log("los numeros ingresados son: ",+a,","+b,","+c," y organizados de forma descendente son: ",+b,","+c,","+a,)
}

if(a==b && b==c){

    console.log("los numeros ingresados son: ",+a,","+b,","+c,"son iguales")
}
if(a<b && a>c){

    console.log("los numeros ingresados son: ",+a,","+b,","+c," y organizados de forma descendente son: ",+a,","+b,","+c,)
}

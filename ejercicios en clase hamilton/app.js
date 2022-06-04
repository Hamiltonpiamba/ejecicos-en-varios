var x = parseInt(prompt("ingrese numero"))

var acum=1

if(x>0){

for(n=x; n>0;n--){


acum=acum*n

}

}
else if (x==0){


    console.log(acum)
}
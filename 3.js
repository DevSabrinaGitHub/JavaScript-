/* 
Para ver que tipo de dato es una variable utilizo 

type of     */

var nombre= "sabrina";
console.log(typeof nombre);     //imprime string


/*para ver la longitud de ese nombre */
console.log(nombre.length);   //imprime 7



/*buscar la posicion de un elemento */ //si no lo encuentra imprime -1   //no es necesario poner una palabra completa
var saludo= "hola este es un curso de Java";
console.log(saludo.indexOf('Java'));    //imprime 25 



/*retornar true o false si existe un elemento */ 
console.log(saludo.includes('curso'));   //retorna true


//incremento 
var nmr= 10;
console.log(nmr++)  //muestra y despues incrementa
console.log(nmr);  //imprime 11


var num= 10;
console.log(++num);  //imprime 11, incrementa y despues muestra


//incremento en 1
let puntaje = 10
puntaje+= 10;
console.log(puntaje); //imprime 20

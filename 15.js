// FUNCIONES QUE RETORNAN VALORES


let total = 0;

function carrito(precio){ //la variable precio contendra los valores que iremos pasando
    return total+= precio;  //ira sumando lo que tiene total mas los valores
}

total= carrito(200); //valores que iran al parametro precio 
total= carrito(500);
total= carrito(100);

console.log(total);  //imprime 800


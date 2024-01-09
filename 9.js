// Arrays

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.table(numeros); // imprime los datos en consola en forma de tabla secuencial


const array = [20, "darrolladora", { nombre: "sabrina", ambito: "front-end" }]; //muchos valores en un array
console.log(array);


//acceder a un array 
console.log(numeros[3]); //imprime 4


//agregar un elemento a un array
numeros[9]= 10;
console.table(numeros);  //imprime nmr del 1 al 10


//agrega un elemento al final 
numeros.push(60); //agrega una posicion 10 y coloca el elemento nuevo 60
console.table(numeros); 


//agregar elementos al inicio 
numeros.unshift(-1,-50); //agrega 2 posiciones mas: 11 y 12 para los ultimos elementos,posicion 0/1 /elementos -1 y -50
console.table(numeros);

//eliminar el ultimo elemento
numeros.pop();
console.log(numeros); //ya no muestra el elemento 60

//eliminar primer elemento
numeros.shift()
console.log(numeros); //ya no muestra -1


//eliminar elementos por su indice
numeros.splice(5,1)   //si pongo solo el 5 elemina 5 elementos //si pongo 5,1 elimina solo el elemento de la posicion 5
console.log(numeros);


//crear un numero elemento con spreed
const meses= ["enero", "marzo", "abril"];
const datos =[...meses, "mayo"];  //que en el array de meses se agregue mayo 
console.log(datos);



//verificar si existe un elemento en un array con includes
const frutas = ["manzana", "banana", "uva", "pera"];
const existeBanana = frutas.includes("banana"); // Verificar si "banana" está presente en el array de frutas
    if (existeBanana) {
        console.log("Sí, tenemos banana en la lista de frutas.");
    } else {
        console.log("No, no tenemos banana en la lista de frutas.");
    }





//verificar un elemento de un array con some
const frutas2 = ["manzana", "banana", "uva", "pera"];

const existeUva = frutas2.some(function(i) { // Verificar si "uva" está en el array de frutas usando some, la i itera en todos los elementos 
  return i === "uva";
});
if (existeUva) {
  console.log("Sí, tenemos uva en la lista de frutas.");
} else {
  console.log("No, no tenemos uva en la lista de frutas.");
}



//sumar elementos con reduce
const ropa = [
    { nombre: "camisa",  precio: 300 },
    { nombre: "short", precio: 350 },
    { nombre: "remera", precio: 400 },
    { nombre: "top", precio: 600 },
    { nombre: "vestido", precio: 1000 },
    { nombre: "pantalon", precio: 2000 },
];

let result;

// Utilizar reduce para sumar los precios de los productos
result = ropa.reduce(function(total, producto) {
    // total es el acumulador que lleva la suma
    // producto es el objeto actual en el array, es una variable iteradora

    return total + producto.precio;
}, 0); // Inicializamos en cero
console.log(result);




//filter evalua una condicion 
result= ropa.filter(function(producto){
    return producto.precio > 400;   //que retorne el producto actual y el precio  ( pero mayores a 400$  )
});
console.log(result);






//otro ejemplo con reduce
const nums = [1, 2, 3, 4, 5];

const suma = nums.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(suma); // Resultado: 15




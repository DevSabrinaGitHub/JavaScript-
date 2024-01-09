//Metodos ARRAYS

const meses = ["enero", "febrero", "marzo", "abril"];

const carrito = [
  { nombre: "celular samsung a10", precio: 300 },
  { nombre: "celular samsung a11", precio: 350 },
  { nombre: "celular samsung a12", precio: 400 },
  { nombre: "celular iphone 8plus", precio: 600 },
  { nombre: "celular iphone 11", precio: 1000 },
  { nombre: "celular iphone 13", precio: 2000 },
];

console.table(carrito);

//comprobar si existe un elemento con forEach //foreach itera en todos los elementos de un array

carrito.forEach(function (product) {
  if (product.nombre === "celular iphone 11") {
    console.log("Celular disponible");
  }
});



//agregar un nuevo elemento
const nuevoCelular = { nombre: "celular iphone 14", precio: 2500 }; //guardamos los datos en una nueva variable
carrito.push(nuevoCelular);  //los elementos de nuevoCelular se agregaran al carrito a traves de push 
console.table(carrito);


//sumar todos los elementos con reduce
let result; 
result= carrito.reduce(function(suma, producto){  //suma es el total que lleva y producto es el elemento actual
    return suma + producto.precio;

}, 0);
console.log(result);


//evaluar una condicion con filter
result= carrito.filter(function(producto){
    return producto.precio > 400;   //que retorne el producto actual y el precio pero mayores a 400$
});

console.log(result);  //imprime 600, 1000, 2000, 2500
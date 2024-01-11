//ForEach automaticamente sabe cuantos elementos hay en un arreglo, es decir
// no necesito una condicion para que evalue hasta cuanto debe ejecutar
// foreach itera en todos los elementos
//si quiero iterar e imprimir en todos los elementos de un listado es mejor utilizar foreach


const carrito = [
    { nombre: "celular samsung a10",  precio:  300  },
    { nombre: "celular samsung a11",  precio:  350  },
    { nombre: "celular samsung a12",  precio:  400  },
    { nombre: "celular iphone 8plus", precio:  600  },
    { nombre: "celular iphone 11",    precio:  1000 },
    { nombre: "celular iphone 13",    precio:  2000 },
];

carrito.forEach(function(producto){ //parametro del producto actual
    console.log(producto) //imprime a todos los elementos
});                       //producto.nombre o precio imprime el mismo



//foreach en arrows functions
carrito.forEach((producto) =>{
    console.log(producto.nombre) //imprime los nombres
});


//segunda manera
carrito.forEach(producto => console.log(producto.nombre) //imprime los nombres
);



//si quiero crear un nuevo arreglo utilizo .map 

const arreglo2= carrito.map(producto => producto.nombre); //se crea un arreglo con los nombres de los productos del carrito y se guarda en arreglo2
console.log(arreglo2);                                    // la variable producto itera el elemento actual hasta llegar a 5


//otra manera 
const arregl2= carrito.map(producto => `${producto.nombre} / ${producto.precio}`);
console.log(arregl2);
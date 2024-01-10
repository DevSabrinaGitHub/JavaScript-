// ARROW FUNCTIONS se utilizan en FUNCIONES EXPRESADAS, en funciones declaradas no.

/*

const sumar= function(n1, n2){  //function expresada
    console.log(n1+n2)
}  
console.log(10,30)


*/




//basicamente el arrow function (funcion flecha) consiste en eliminar por ejemplo, solo la palabra function
// y agregar una flecha al lado de los parametros n1 y n2 y ya . la llave sustituye function 

var sumar= (n1, n2) => {  //function expresada
    console.log(n1 + n2);
}

sumar(10,30);



//otra forma de hacer
const texto= tecnologia => console.log(`aprendiendo ${tecnologia}`)  //tecnologia es un parametro que contiene el argumento (JS)
texto (`JS`)   




//OTRO EJEMPLO CON ARROW FUNCTION 
const carrito = [
    { nombre: "celular samsung a10",  precio:  300  },
    { nombre: "celular samsung a11",  precio:  350  },
    { nombre: "celular samsung a12",  precio:  400  },
    { nombre: "celular iphone 8plus", precio:  600  },
    { nombre: "celular iphone 11",    precio:  1000 },
    { nombre: "celular iphone 13",    precio:  2000 },
  ];
  
  console.table(carrito);
  
  //comprobar si existe un elemento con forEach //foreach itera en todos los elementos de un array
  
  carrito.forEach (product => {
    if (product.nombre === "celular iphone 11") {
      console.log("Celular disponible");
    }
  });
  


//otro ejemplo 
let result;
result = carrito.reduce((suma, producto) => { 
    return suma + producto.precio;
}, 0);

console.log(result);

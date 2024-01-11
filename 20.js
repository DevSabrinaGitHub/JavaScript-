//ESTRUCTURAS REPETITIVAS/ ITERADORAS 
//for loops

const carrito = [
      { nombre: "celular samsung a10",  precio:  300  },
      { nombre: "celular samsung a11",  precio:  350  },
      { nombre: "celular samsung a12",  precio:  400  },
      { nombre: "celular iphone 8plus", precio:  600  },
      { nombre: "celular iphone 11",    precio:  1000 },
      { nombre: "celular iphone 13",    precio:  2000 },
  ];
  
  for(let i = 0; i < carrito.length; i++) {
      console.log (carrito[i]);  //si ponemos carrito.nombre imprime todos los nombres de los productos
  }
  
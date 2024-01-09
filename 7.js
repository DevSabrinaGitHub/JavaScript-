// metodos de objetos

const producto= {
    nombre: "tv de 20",
    precio: 300 ,
    disponible: true,
}


//freeze congela un elemento, es decir, no agregar, modificar o eliminar un elemento
Object.freeze(producto.precio);  
console.log(producto);


Object.seal(producto.precio); //no permite agregar, eliminar pero si PERMITE modificar el elemento existente
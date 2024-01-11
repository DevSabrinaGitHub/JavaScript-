// classes JS


//las clases siempre se deben marcar con mayuscula ej: Producto
class Producto{
    constructor(nombre, precio){ //se deben pasar los datos a traves de un constructor, es una funcion reservada
        this.nombre1= nombre;
        this.precio1= precio;
    }

}

const producto2= new Producto(`monitor gfast`, 500);
const producto3= new Producto(`monitor Mac`, 200);

console.log(producto2);
console.log(producto3);
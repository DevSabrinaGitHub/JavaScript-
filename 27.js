// POO herencia

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


class Libro extends Producto{  //es decir libro hereda lo que tiene Producto
    constructor(nombre, precio, id){
        super(nombre, precio); //super ira al objeto producto, busca las variables nombre1 y precio1, pasamos como parametros nombre, precio para que busque 
        this.id= id;
    }
}

const libro= new Libro(`Aprende Ingles`, 1200, `9585956`);

console.log(libro);

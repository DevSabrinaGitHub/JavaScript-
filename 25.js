// Programacion orientada a objetos (POO)

//Object Literal
const reservacion={
    nombre: "sabrina",
    total: 5000,
    pagado: true,
};


//Object Constructor
//inicializa con una funcion 

function Producto(nombre, precio){ //producto es una clase que contiene los datos de un objeto
    this.nombre1= nombre;
    this.precio1= precio;
}

const producto2= new Producto(`monitor gfast`, 500); //puedo crear multiples variables/ objetos
const producto3= new Producto(`monitor Mac`, 200);


console.log(producto2);



//Spreed : une objetos, valores de variables

const producto= {
    nombre: "tv de 20",
    precio: 300 ,
    disponible: true,
}


const medidas= {
    peso: 2,
    pulgadas: 45,
}


const productos= {...producto, ...medidas};

console.log(producto) //imprime solo lo que tiene el objeto producto
console.log(productos) //imprime todos los valores

/* 
Objetos: se representa por llaves y :
*/

var producto= {
    nombre: "tv de 20",
    precio: 300 ,
    disponible: true,
}

console.log(producto);  //imprime todos los datos
console.log(producto.precio)   //si quiero imprimir solo un elemento   //imprime 300



//agregar nuevas propiedades
producto.celular= "samsung a50";
console.log(producto);


//eliminar un elemento 
delete producto.disponible;
console.log(producto); //ya no imprime disponible true



//acceder a un elemento de otra forma
const precioProducto= producto.precio;
console.log(precioProducto);  //imrpime 300


//destructuring: saca un elemento de una estructura (siempre se usan llaves)
const {precio}= producto;
console.log(precio);  //imprime 300 
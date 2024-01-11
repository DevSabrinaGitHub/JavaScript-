//Notificacion API 

//EDITAR EL HTML AGREGANDO UN BUTTON 

//como puedo seleccionar un elemento de html en mi codigo de JS? A traves de un document
//document se referencia a todo el html que tenemos en nuestro sitio web
//seleccionar un elemento con querySelector

const boton= document.querySelector('#boton');

/*
boton.addEventListener  addEventListener nos permite registrar un evento a la variable boton, que tiene agregado con el id botonAPI
*/



boton.addEventListener('click', function() {
    console.log('diste click');
});

//ver completo en 31.js
'use strict'
var boton = document.querySelector('#boton');

    boton.addEventListener('click', () => {
        Notification.requestPermission() //pedir permiso al usuario para poder enviar notificaciones
            .then(resultado => console.log('el resultado es ', resultado))
});


//una vez esto, cuando damos click al boton Ver Notificacion 
//automaticamente aparecera una especie de alert o una notficacion en donde si damos click:
//si imprime granted, es porque ha permitido que se muestren notificaciones
//si imprime denied es porque ha rechazado 

if(Notification.permission == 'granted'){
    new Notification('esta es una notificacion',{
        icon: 'img/ccj.png',
        body: 'Codigo con sabrina y juan'
    });
}
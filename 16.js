// FUNCIONES CON OBJETOS y METODOS

const reproductor = {
    reproducir: function (id) {
        console.log(`reproduciendo canción con el ID ${id}`);
    },
    pausar:function(){
        console.log("pausando cancion..");
    }
}
    reproductor.borrarCancion= function (id){
        console.log(`eliminado cancion con el ID ${id}`);
    }

reproductor.reproducir(14); //valor que ira al parametro id

reproductor.pausar();

reproductor.borrarCancion(20); //valor que ira a la funcion borrarcancion (id)


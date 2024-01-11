//This : ES UNA PALABRA RESERVADA: referencia a  objetos como en los siguientes ejemplos:


const reservacion={
    nombre: "sabrina",
    total: 5000,
    pagado: true,
    informacion: function(){
        console.log(`el cliente ${this.nombre} reservo y debe pagar ${total}`);
    }
}

const reservacion2={
    nombre: "Mayra",
    total: 8000,
    pagado: true,
    informacion: function(){
        console.log(`el cliente ${this.nombre} reservo y debe pagar ${total}`);
    }
} 
reservacion.informacion();
reservacion2.informacion();
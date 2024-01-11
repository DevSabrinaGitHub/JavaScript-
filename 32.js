// Async/ await

//podemos escribir codigo y decirle js descargar un listado de 20mil clientes y probablmente tome 5 minutos pero va a ir mostrando el resto sitio web de eso trata async await

function descargarNuevosClientes(){
    return new Promise( resolve => {
            console.log('descargando clientes.. aguarde..');

             setTimeout(() => {
                resolve('la lista fue descargada');
                    }, 5000); //5 segundos





    });
}

async function app(){ //funcion asincrona
    try{
        const resultado= await descargarNuevosClientes();
        console.log(resultado);
    }catch(error){  
        console.log('app lista');
    }


}
app();

//por pantalla sale : descargando clientes.. aguarde..
// esperamos 5 segundos
//la lista fue descargada'




/*hacer que el codigo en la descarga tarde un poco: 
setTimeout(function() {
  console.log('descargando ...')
}, 5000); 

*/
// usar async en varios casos

function descargarNuevosClientes(){
    return new Promise( resolve => {
            console.log('descargando clientes.. aguarde..');

             setTimeout(() => {
                resolve('la lista fue descargada');
                    }, 5000); 
    });
}

function descargarUltimosPedidos(){
    return new Promise( resolve => {
            console.log('descargando pedidos. aguarde..');

             setTimeout(() => {
                resolve('los pedidos fueron descargados');
                    }, 3000); 
    });
}




async function app(){ 
    try{
        /* const clientes= await descargarNuevosClientes(); //esto ejecuta esta linea de codigo primero
        const pedidos= await descargarUltimosPedidos();   //si se cumple ejecuta esta linea
        console.log(clientes);
        console.log(pedidos);
        */

        const resultado= await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);  //ejecuta al mismo tiempo la funciones
            console.log(resultado[0]);
            console.log(resultado[1]);

    }catch(error){  
        console.log('error');
    }


}
app();
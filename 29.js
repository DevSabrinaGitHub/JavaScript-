// promises
//refleja un valor que estara disponible en un futuro


const usuarioAutenticado= new Promise( (resolve, reject) =>{ //resolve y reject se pasan automaticamente en un promise
    const auth= true;                                        //resolve ejecuta cuando una condicion del promise se cumple 
        if(auth){
            resolve('Usuario autenticado');  //promise se cumple
        }else{
            reject('No se pudo iniciar sesión');  //promise no se cumple
        }


});
console.log(usuarioAutenticado);

//en consola promise existen 2 valores: 
//Pending: no se ha cumplido ni se ha rechazado (pendiente)
//Fulfilled: se cumplio
//rejected: se ha rechazado o no se pudo cumplir
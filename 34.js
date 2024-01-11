//Fetch API: al igual que Ajax permite enviar informacion al servidor u obtener informacion de un servidor
//tambien permite actualizar la aplicacion o sitioweb sin la necesidad de recargar la pagina
//procesa automaticamente

//un archivo js no puede consultar a una base de datos por si solo.
// se requiere de un lenguaje de backend que se conecte a un servidor, a una base de datos y realice una consulta a traves de JSON
//JSON: JavaScript Object Notation (lenguaje de transporte de datos)
//JSON puede ser creado en cualquier lenguaje y se puede consumir en JS por medio de Fetch API y mostrarlo en el sitioweb

// primero debemos crear un archivo json con el nombre empleados.json donde contendra los datos de cada persona


 function obtenerEmpleados() {
    const archivo = 'empleados.json';

    fetch(archivo)
        .then(resultado => resultado.json());
        .then(datos =>  console.log(datos);
        
    }
    obtenerEmpleados();





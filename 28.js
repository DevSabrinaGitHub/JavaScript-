//en JS sabemos que una linea de codigo con mal sintaxis no ejecutará nada
// para evitar esto utilizamos try catch
// try catch busca el error de un codigo, pero sigue ejecutando por mas que haya errores
///pero se utiliza en situaciones especificas e importantes (no en todo el codigo)

const num1= 20;
const num3= 30;

try{
    console.log(num2);   //sabemos que num2 no tiene ningun valor 
}catch(error){
    console.log(error);
}


console.log(num1);
console.log(num3);
//en pantalla dira : num2 is not defined
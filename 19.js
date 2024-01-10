//SWITCH



var  pago= "cheque" ;

switch(pago){
    case 'tarjeta':
        console.log("ha pagado con tarjeta")
    break;
    case 'cheque':
        console.log("has pagado con cheque. CORRECTO")
    break;
    default:
        console.log("error")
    break;
}

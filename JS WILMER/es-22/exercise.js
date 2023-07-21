let primitive = 1232313;



switch (primitive) {
    case Number(primitive): 
    console.log('El valor es un número:', primitive);
    break;
    case String(primitive): 
    console.log('El valor es una cadena de texto:', primitive);
    break;
    case Boolean(primitive): 
    console.log('El valor es un booleano:', primitive);
    break;
    


}
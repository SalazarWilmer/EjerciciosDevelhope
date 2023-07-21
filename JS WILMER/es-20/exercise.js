let primitive = null;


if (typeof primitive === 'number') {
    console.log('El valor es un número:', primitive);
  } else if (typeof primitive === 'string') {
    console.log('El valor es una cadena de texto:', primitive);
  } else if (typeof primitive === 'boolean') {
    console.log('El valor es un booleano:', primitive);
  } else {
    console.log('El valor es de un tipo desconocido:', primitive);
  }

  //le agregue el null :D
function repeatHello(callback) {
  setInterval(callback, 1000);
}

const sayHello = () => {
  console.log("Hola");
};

repeatHello(sayHello);

// Las funciones flecha se caracterizan por conservar el contexto lexico con el que fue creada, esto las hace ideales para ser utilizadas como callback en este ejercicio, me refieron con esto a que si estuviesemos usando this podria cambiar el contexto en el que se llama la funcion y podria generar comportamientos inesperados.

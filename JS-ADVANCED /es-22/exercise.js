const number = 15;


const miPromesa = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("El número es mayor que 10"); 
  } else {
    reject("El número no es mayor que 10");
  }
});

miPromesa
  .then((resultado) => {
    console.log("Resuelto:", resultado); 
  })
  .catch((error) => {
    console.error("Rechazado:", error); 
  });

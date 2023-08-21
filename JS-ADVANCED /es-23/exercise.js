const firstPromise = (isLogged) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isLogged) {
          const randomNumber = Math.random();
          resolve(randomNumber);
        } else {
          reject(new Error("Usuario no autenticado"));
        }
      }, 1000); 
    });
  };
  
  const secondPromise = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number > 0.5) {
          resolve({ name: "John", age: 24 });
        } else {
          reject(new Error("Número menor o igual a 0.5"));
        }
      }, 2000); 
    });
  };
  
  const isLogged = true; 
  
  firstPromise(isLogged)
    .then((randomNumber) => {
      console.log("Número aleatorio:", randomNumber);
      return secondPromise(randomNumber);
    })
    .then((result) => {
      console.log("Resultado final:", result);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  
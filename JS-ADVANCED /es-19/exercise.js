function printAsyncName(callback, name) {
    
  const callbackInterval = setInterval(() => {
    callback(); 
  }, 1000);

  setTimeout(() => {
    clearInterval(callbackInterval); 
    console.log(name); 
  }, 2000);
}

  
  function imprimirHola() {
    console.log("Hola");
  }
  
  printAsyncName(imprimirHola, "Juan");
  
function printAsyncName(callback, name) {
    let seg = 0;
  
    const intervalId = setInterval(() => {
      if (seg === 0) {
        callback();
        seg++;
      } else if (seg === 1) {
        console.log(name);
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  function imprimirHola() {
    console.log("Hola");
  }
  
  printAsyncName(imprimirHola, "Juan");
  
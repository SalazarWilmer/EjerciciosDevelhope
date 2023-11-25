function repeatHello(callback) {
    const id = setInterval(callback, 1000);
    return id; 
  }
  
  function sayHello() {
    console.log("Hola");
  }
  
  const id = repeatHello(sayHello);
  

  setTimeout(() => {
    clearInterval(id);
    console.log("Stop");
  }, 5000); 
  
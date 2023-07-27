function printName() {
    let helloName = "Hello John";
  
    function inner() {
      return helloName;
    }
  
    return inner;
  }
  
  const closureFunction = printName();
  console.log(closureFunction()); 
  
  setTimeout(function() {
    console.log(closureFunction()); 
  }, 1000);
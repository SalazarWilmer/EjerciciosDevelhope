function printName(name) {
  console.log(name);
}

function sayHelloName(callback) {
  setTimeout(function () {
    console.log("Hello");
    callback("wilmer");
  }, 1000);
}

sayHelloName(printName);

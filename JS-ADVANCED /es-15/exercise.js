class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
  //aqui agregando el metodo static tomamos un string JSON como parametro
  // y la convertimos en un obj usando JSON.parse(), creamos un nuevo Person con los datos del obj y hacemos return 
  // asi podemos crear un obj person a partir de un string JSON
  static fromJson(json) {
    const data = JSON.parse(json);
    return new Person(data.id, data.firstName, data.lastName, data.age);
  }

}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
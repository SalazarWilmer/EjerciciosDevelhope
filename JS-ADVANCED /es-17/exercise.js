const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};
// primero hacemos una destructuracion que tome las propiedades que queremos del objeto person
const { id, age } = person;
// luego creamos otro objeto que nos va a servir de filtro con las propiedades que tomamos
const filtro = { id, age };
// y por ultimo convertimos a filtro con JSON.stringify en un string JSON
const json = JSON.stringify(filtro);

// const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 }

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const { id, name, surname, old } = person;

// sin cambiar las propiedades se usa una destrcturación con alias para asignarle nuevos nombres a la variables.
// y que no devuelva undefined, fijandose que solo a name, surname y old se le asignan alias 
//al id no es necesario.
const { id, firstName: name, lastName: surname, age: old } = person;

console.log(id, name, surname, old);
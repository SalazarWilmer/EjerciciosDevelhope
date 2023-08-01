# Classes

Create a class called Developer. The Developer class has to inherit the Person class created in the previous exercise. The Developer class takes in another argument in the constructor method (role).
# Clases

Cree una clase llamada Desarrollador. La clase Desarrollador tiene que heredar la clase Persona creada en el ejercicio anterior. La clase Developer toma otro argumento en el método constructor (rol).

class Person {
constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}
}

const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(developer.firstName + " " + developer.lastName + " " + developer.role);

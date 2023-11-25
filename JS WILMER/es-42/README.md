# Exercise 42

In the code below we have an object literal called `user` tha has two properties: `name` and `age`. If we try to create a `newUser` starting from `user` and, after that, we try to change the name, you'll notice that even the original `user` has been modified. How can we modify the name of `newUser` without changing the name of `user`?

let user = {
name: "Cosimo",
age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);

**Suggestion**
Try to use a `for in` loop, as it showed in the video lessons.
You would need a new copy of the `user` object.
You can find some useful info [here](https://javascript.info/object-copy)


# Ejercicio 42

En el siguiente código tenemos un objeto literal llamado `usuario` que tiene dos propiedades: `nombre` y `edad`. Si intentamos crear un `nuevoUsuario` a partir de `usuario` y, después de eso, intentamos cambiar el nombre, notará que incluso el `usuario` original ha sido modificado. ¿Cómo podemos modificar el nombre de `nuevoUsuario` sin cambiar el nombre de `usuario`?

dejar usuario = {
nombre: "Cosimo",
edad: 30,
};

let nuevoUsuario = usuario;

nuevoUsuario.nombre = "Paolo";

consola.log(nuevoUsuario);
consola.log(usuario);

**Sugerencia**
Trate de usar un bucle `for in`, como se muestra en las lecciones en video.
Necesitaría una nueva copia del objeto `usuario`.
Puede encontrar información útil [aquí] (https://javascript.info/object-copy)
import React from "react";
// What happens if the name variable contains a JSX expression instead of a string?
//Respuesta: Por ejemplo si utilizamos una expresion JSX en vez de un string cuando llamamos al componente en 
// App.js sera renderizado como elementos de react y no textos planos como seria si estuviese llamado con strings. 

const JSX4 = ({ name }) => {
  const solucion = <h1>Hello, {name ? name : "undefined"}!</h1>;

  return (
    <div>
      {solucion}
    </div>
  );
};

export default JSX4;
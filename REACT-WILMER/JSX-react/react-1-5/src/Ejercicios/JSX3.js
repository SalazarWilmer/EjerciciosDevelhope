import React from "react";

//Respuesta: Si no le pasas un nombre, mostrará "Hello, undefined!" por defecto.

const JSX3 = ({ name }) => {
  const solucion = <h1>Hello, {name ? name : "undefined"}!</h1>;

  return (
    <div>
      {solucion}
    </div>
  );
};

export default JSX3;
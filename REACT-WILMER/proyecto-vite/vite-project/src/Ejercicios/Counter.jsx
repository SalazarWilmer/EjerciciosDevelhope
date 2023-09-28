import React, { useState } from "react";

const Counter = ({ initialValue, incrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  return (
    <div>
      <h2>Contador: {counter}</h2>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
};

export default Counter;


/**  setCounter(counter + 1); funcion valor inmediato
 * Respuesta al ejercicio 30:
 * En este componente estamos usando una funcion de valor inmediato, tambien podriamos hacerlo con una funcion que devuelva
 * un valor que podria ser setCounter(prevCounter => prevCounter + 1), de las dos maneras se obtiene el resultado deseado, lo 
 * que hay que tener en cuenta es que a medida que vayamos realizando mas y mas proyectos y ejercicios tendremos diferentes 
 * situaciones en las que podamos usar una manera y la otra, la diferencia entre estas funciones es que la primera te dara un
 * valor directo mientras que la segunda tomara un valor y le sumara a ese valor dado.
 */

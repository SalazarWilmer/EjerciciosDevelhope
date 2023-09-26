import React from 'react';

const Welcome = (props) => {
  return (
    <div>
    <p>
      Welcome, {props.name || <strong>guest</strong>}!
    </p>
    {props.age && (
      <p>
        Your age is {props.age}.
      </p>
    )}
  </div>
  )}



/**Respuesta al ejercicio 17 de props: Como podemos observar si se puede establecer 
 * un valor predeterminado si no se proporciona el nombre en la variable name, de lo contrario el valor que 
 * mostraria la variable seria undefined */

/**
 * Respuesta al ejercicio 19: Para modificar el valor de la name de string a JSX y agregarle las etiquetas
 * <strog>, solamente debemos encerrar el texto que estaba dentro de las '' y eliminar esas comillas.
 */
export default Welcome;

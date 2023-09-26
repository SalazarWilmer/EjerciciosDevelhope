import React from 'react';

const Welcome = (props) => {
  return (
    <p>
      Welcome, {props.name || 'guest'}!
    </p>
  );
}


/**Respuesta al ejercicio 17 de props: Como podemos observar si se puede establecer 
 * un valor predeterminado si no se proporciona el nombre en la variable name, de lo contrario el valor que 
 * mostraria la variable seria undefined */
export default Welcome;

import Age from "./Age";

const Welcome = (props) => {
  return (
    <div>
      <p>Welcome, {props.name || <strong>invitado</strong>}!</p>
     
      {props.age !== undefined && props.age !== null && <Age age={props.age} />}
    </div>
  );
};

/**Respuesta al ejercicio 17 de props: Como podemos observar si se puede establecer
 * un valor predeterminado si no se proporciona el nombre en la variable name, de lo contrario el valor que
 * mostraria la variable seria undefined */

/**
 * Respuesta al ejercicio 19: Para modificar el valor de la name de string a JSX y agregarle las etiquetas
 * <strog>, solamente debemos encerrar el texto que estaba dentro de las '' y eliminar esas comillas.
 */

/**
 * Respuesta al ejercicio 21: al modificar este componente welcome para que solo renderice el componente Age
 * si se cumple con la condicion si es mayor de 18, agregamos esta condicion antes de llamar a nuestro componente
 * 
 */
export default Welcome;

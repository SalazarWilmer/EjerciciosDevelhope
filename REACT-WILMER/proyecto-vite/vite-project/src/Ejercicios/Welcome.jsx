import Age from "./Age";
import "../assets/index.scss"

const Welcome = (props) => {
  const isAgeValid = props.age > 18 && props.age < 65;
  console.log(isAgeValid);
  const isNameValid = props.name === 'John';
  return (
    <div className="welcome">
      <p>Welcome, {isNameValid ? <strong>{props.name}</strong> : <strong>invitado</strong>}!</p>
     

      {isAgeValid && <Age age={props.age} />}
    </div>
  );
};
export default Welcome;

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

import React, { useRef } from "react";


const UncontrolledLogin = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const remember = rememberRef.current.checked;

    if (username && password) {
      onLogin({ username, password, remember });
    }
  };

  const handleReset = () => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    rememberRef.current.checked = false;
  };

  return (
    <form  onSubmit={handleSubmit}>
      <div >
        <label htmlFor="usernames">Username:</label>
        <input className="border rounded p-4 bg-pink-200" type="text" id="usernames" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input className="border rounded p-4 bg-pink-200" type="password" id="passwords" ref={passwordRef} />
      </div>
      <div>
        <label>
          <input  type="checkbox" ref={rememberRef} />
          Remember Me
        </label>
      </div>
      <button  className="m-4 p-6 bg-blue-500 text-white" type="submit">Login</button>
      <button className="m-4 p-6 bg-blue-500 text-white" type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default UncontrolledLogin;
/** Respuesta al ejercicio Uncontrolled Forms 47:
*Existen 3 maneras de acceder a la data de form de los valores actuales de username y password
n1= Primero se puede hacer utilizando componentes controlados aqui los campos de entrada estan vinculados al useState de React
y se puede acceder directamente desde las variables del estado ej:
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const nombreUsuarioActual = username;
const contraseñaActual = password;
 */

/**
n2 = La segunda manera es utilizando Refs con componentes no controlados para acceder a los nodos del DOM y a sus valores actuales.
Ej: 
const refUsuario = useRef(null);
const refContraseña = useRef(null);

const nombreUsuarioActual = refUsuario.current.value;
const contraseñaActual = refContraseña.current.value;

<input type="text" ref={refUsuario} />
<input type="password" ref={refContraseña} />
*/

/**
n3 = La tercera manera es utilizando Objetos de Evento en Manejadores de Eventos donde puedes acceder  a los valores desde el objeto
de evento que se pasa al manejador de eventos. 
Ej:
const handleSubmit = (event) => {
  event.preventDefault();

  const nombreUsuarioActual = event.target.elements.username.value;
  const contraseñaActual = event.target.elements.password.value;
};

Hay que tener en cuenta que el enfoque adecuado dependerá de si estás usando componentes controlados o no controlados y
 de los requisitos específicos de tu aplicación. Los componentes controlados están más centrados en React
y se gestionan a través del estado, mientras que los componentes no controlados interactúan de manera 
más directa con el DOM.
*/
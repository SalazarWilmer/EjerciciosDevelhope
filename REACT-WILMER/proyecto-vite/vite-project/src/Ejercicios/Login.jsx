import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username" 
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password" 
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="remember" 
            checked={remember}
            onChange={handleRememberChange}
          />
          Remember
        </label>
      </div>
      <button type="submit" style={{ backgroundColor: password.length < 8 ? '#a11a1a' : 'green' }} disabled={!username || !password}>
        Login
      </button>
    </form>
  );
};

export default Login;


/**
 * Respuesta al ejercicio Uncontrolled Forms 48:
 * 
 * Are there non-standard APIs that can be used to access the form data? R= Las APIs no estandar son donde utlizamos document.getElementById, no es tan recomendable hacerlo de esta manera ya que existen 
 * maneras mas actualizadas y mejor legibles ahora.
 * 
 *  What is the standard API? R=Es una interfaz de programación de aplicaciones que sigue un conjunto 
 * establecido de especificaciones y reglas ampliamente aceptadas. Estas especificaciones están definidas y 
 * mantenidas por organizaciones reconocidas y suelen estar disponibles públicamente para que los desarrolladores 
 * las utilicen.
 * 
 */


/**
 * Respuesta al ejercicio Uncontrolled Forms 49:
 * Como puedes ver ya he utilizado FormData
 * Podria decir que sus ventajas son:
 * Tiene una facilidad de uso ya que esta proporciona una manera sencilla y directa de obtener los datos de un form sin tener que acceder a cada campo individualmente.
 * El manejo de archivos ya que facilmente podemos junto con los datos del formulario manejar como por ejemplo imagenes, esto es dificil de lograr con otros enfoques.
 * Tiene una compatibilidad con Ajax y ademas permite una flexibilidad con los nombres ya que utilizando los mismos de los campos podemos acceder a datos especificos.
 * 
 * En cuanto a desventajas puedo decir que:
 * Principalmente puede que no sea compatibles con navegadores antiguos, en estos mismos puede requerir un manejo adicional para garantizar la compatibilidad.
 * Si se necesitan procesamientos complejos o validaciones de datos antes del envío, FormData puede resultar limitada en comparación con un manejo personalizado.
 * No ofrece métodos integrados para validar los datos antes de enviarlos, lo que significa que se debe realizar la validación manualmente antes de utilizar la API FormData.
 * Y por ultimo puede incluir campos ocultos en el formulario que no deberían ser enviados, ya que FormData envía todos los campos del formulario.
 */
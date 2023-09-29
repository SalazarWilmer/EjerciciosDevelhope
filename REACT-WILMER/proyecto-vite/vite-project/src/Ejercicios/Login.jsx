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

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);

    const username = formData.get('username');
    const password = formData.get('password');
    const remember = formData.get('remember') === 'on';

    if (username && password) {
      onLogin({ username, password, remember });
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={!username || !password}>
        Login
      </button>
      <button type="button" onClick={handleReset}>Reset</button>
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
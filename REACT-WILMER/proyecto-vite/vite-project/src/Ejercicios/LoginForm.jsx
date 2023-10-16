import React from 'react';
import useFormInput from './useFormInput';

const LoginForm = ({ onLogin }) => {
  const { inputs, handleInputChange, handleSubmit } = useFormInput(onLoginFormSubmit);

  function onLoginFormSubmit() {
    onLogin(inputs.username, inputs.password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de usuario:
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default LoginForm;

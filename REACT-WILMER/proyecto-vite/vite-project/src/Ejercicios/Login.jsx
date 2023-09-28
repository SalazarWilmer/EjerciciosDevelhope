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

  const handleLogin = () => {
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
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={handleRememberChange}
          />
          Remember Me
        </label>
      </div>
      <button onClick={handleLogin} disabled={!username || !password}>
        Login
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Login;

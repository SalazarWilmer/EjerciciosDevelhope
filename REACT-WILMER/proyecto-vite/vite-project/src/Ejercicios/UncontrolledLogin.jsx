import React, { useRef } from 'react';

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
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    rememberRef.current.checked = false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernames">Username:</label>
        <input type="text" id="usernames" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="passwords" ref={passwordRef} />
      </div>
      <div>
        <label>
          <input type="checkbox" ref={rememberRef} />
          Remember Me
        </label>
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default UncontrolledLogin;

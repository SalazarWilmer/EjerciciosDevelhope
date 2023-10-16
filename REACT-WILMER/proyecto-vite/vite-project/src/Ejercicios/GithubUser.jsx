import React from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
  const user = useGithubUser(username);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>Información del Usuario</h2>
      <img src={user.avatar_url} alt={`Avatar de ${user.login}`} />
      {user.name && <p>Nombre: {user.name}</p>}
      <p>Login: {user.login}</p>
    </div>
  );
};

export default GithubUser;

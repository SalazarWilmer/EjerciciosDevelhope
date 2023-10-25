import React from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos del usuario</p>;
  }

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

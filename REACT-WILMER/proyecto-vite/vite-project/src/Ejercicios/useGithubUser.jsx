import { useState, useEffect } from 'react';
import axios from 'axios';

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return user;
};

export default useGithubUser;

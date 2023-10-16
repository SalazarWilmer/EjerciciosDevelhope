import { useState, useEffect } from 'react';
import axios from 'axios';

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (username) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserData(username);
    }
  }, [username]);

  return {
    user,
    error,
    loading,
    fetchUserData,  
  };
};

export default useGithubUser;

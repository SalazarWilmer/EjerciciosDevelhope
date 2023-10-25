import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GithubUser from './GithubUser';
import "../styles/index.scss"

const GithubUsers = () => {
  const [usernames, setUsernames] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState(null);
  const [inputUsername, setInputUsername] = useState("");

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        const usernames = response.data.map(user => user.login);
        setUsernames(usernames);
      } catch (error) {
        console.error('Error al obtener los nombres de usuario', error);
      }
    };
    fetchUsernames();
  }, []);

  const handleUsernameClick = (event, username) => {
    event.preventDefault();  
    setSelectedUsername(username);
  };

  const handleInputChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handleFetchUser = () => {
    if (inputUsername) {
      setSelectedUsername(inputUsername);
    }
  };
  return (
    <div>
      <h2>Lista de Usuarios de Github</h2>
      <input
        type="text"
        placeholder="Enter a GitHub username"
        value={inputUsername}
        onChange={handleInputChange}
      />
      <button onClick={handleFetchUser}>Fetch User</button>
      <ul className="github-users-list"> 
        {usernames.map((username, index) => (
          <li key={index} className="github-users-list-item"> 
            <a href="#" onClick={(event) => handleUsernameClick(event, username)}>{username}</a>
          </li>
        ))}
      </ul>
      {selectedUsername ? <GithubUser username={selectedUsername} /> : <p>Add a user and select it</p>}
    </div>
  );
};


export default GithubUsers;

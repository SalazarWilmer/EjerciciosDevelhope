import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import GithubUser from './GithubUser'; 

const ShowGithubUser = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/users'); 
  };

  return (
    <div>
      <h1>User Profile</h1>
      <button onClick={handleBack}>Back</button>
      <GithubUser username={username} /> 
    </div>
  );
};

export default ShowGithubUser;

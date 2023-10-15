import React, { useState, useEffect } from "react";
import axios from 'axios';

const GithubUser = ({ username }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error al obtener los datos del usuario', error);
            }
        };
        getUserData();
    }, [username]);

    if (!user) {
        return null;
    }

    return (
        <div>
            <h2>
                Información del Usuario
            </h2>
            <img src={user.avatar_url} alt={`Avatar de ${user.login}`} />
            {user.name && <p>Nombre: {user.name}</p>}
            <p>Login: {user.login}</p>
        </div>
    );
};

export default GithubUser;

// src/components/UsersGithub.js
import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Container } from '@mui/material';

const UsersGithub = () => {
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);

    const handleSearch = () => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.id) {
                    setUsers((prevUsers) => [...prevUsers, data]);
                }
            });
    };

    return (
        <Container>
            <h1>Search GitHub Users</h1>
            <TextField
                label="GitHub Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="success" onClick={handleSearch}>
                Search
            </Button>
            <div className="cards-container">
                {users.map((user) => (
                    <Card key={user.id} className="card">
                        <CardContent>
                            <h2>{user.login}</h2>
                            <p>Name: {username ? username : 'N/A'}</p>
                            <p>Followers: {user.followers}</p>
                            <p>Repos: {user.public_repos}</p>
                            <p>
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                    GitHub Profile
                                </a>
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default UsersGithub;

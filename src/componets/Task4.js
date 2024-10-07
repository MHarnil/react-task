import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const Task4 = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Basic validation
        if (!credentials.username || !credentials.password) {
            setError('Both fields are required.');
            return;
        }

        if (credentials.username === 'admin' && credentials.password === 'password') {
            setSuccess(true);
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <Container sx={{ marginTop: '50px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="username"
                    label="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    value={credentials.password}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{ marginBottom: '20px' }}
                />
                {error && <Typography color="error">{error}</Typography>}
                {success && <Typography color="primary">Login successful!</Typography>}
                <Button type="submit" variant="contained" sx={{ backgroundColor: '#000', color: '#FFF' }}>
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Task4

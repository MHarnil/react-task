import React, { useState } from 'react';
import { Box, Button, Container, InputAdornment, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Task2 = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const isValidPassword = () => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        return regex.test(password);
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>Password Input</Typography>
            <TextField
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button onClick={togglePasswordVisibility} style={{ padding: '0 10px' }}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </Button>
                        </InputAdornment>
                    ),
                }}
                sx={{ width: '100%', maxWidth: '400px' }}
                error={!isValidPassword() && password.length > 0}
                helperText={!isValidPassword() && password.length > 0 ?
                    "Password must be at least 8 characters, include an uppercase letter and a special character." : ''}
            />
            <Button
                variant="contained"
                color="primary"
                disabled={!isValidPassword()}
                sx={{ padding: '15px 20px' }}
            >
                Submit
            </Button>
        </Container>
    );
};

export default Task2;

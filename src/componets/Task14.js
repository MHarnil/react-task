import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Task14 = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5 }}>
                <Box>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Theme Switcher
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 5 }}>
                        Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </Typography>
                    <Button variant="contained" onClick={toggleTheme} sx={{ backgroundColor: '#000', color: '#FFF', mt: 5 }}>
                        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Task14

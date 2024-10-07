import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';

const Task20 = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const updateOnlineStatus = () => {
        setIsOnline(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    return (
        <Container style={{ padding: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Online/Offline Status Tracker
            </Typography>
            <Typography variant="h6" color={isOnline ? 'green' : 'red'}>
                You are currently {isOnline ? 'Online' : 'Offline'}
            </Typography>
            <Button variant="contained" onClick={updateOnlineStatus} style={{ marginTop: '20px' }}>
                Check Status
            </Button>
        </Container>
    );
};

export default Task20

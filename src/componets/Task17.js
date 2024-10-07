import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';

const Task17 = () => {
    const [timeLeft, setTimeLeft] = useState(10);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let intervalId;

        if (isActive && timeLeft > 0) {
            intervalId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive, timeLeft]);

    useEffect(() => {
        if (timeLeft === 0) {
            setIsActive(false);
        }
    }, [timeLeft]);

    const handleReset = () => {
        setTimeLeft(10);
        setIsActive(true);
    };

    return (
        <Container style={{ padding: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Countdown Timer
            </Typography>
            <Typography variant="h6">
                Time Left: {timeLeft} seconds
            </Typography>
            <Button
                variant="contained"
                onClick={handleReset}
                style={{ marginTop: '20px', backgroundColor: '#000', color: '#FFF' }}
                disabled={isActive}
            >
                Reset Timer
            </Button>
        </Container>
    );
};

export default Task17

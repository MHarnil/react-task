import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Tack9 = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleStartStop = () => {
        setIsActive((prev) => !prev);
    };

    const formatTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const seconds = sec % 60;
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };

    return (
        <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4">Timer</Typography>
            <Typography variant="h2" sx={{ margin: '20px 0' }}>
                {formatTime(seconds)}
            </Typography>
            <Box>
                <Button
                    variant="contained"
                    color={isActive ? "secondary" : "primary"}
                    onClick={handleStartStop}
                    sx={{ marginRight: '10px' }}
                >
                    {isActive ? 'Stop' : 'Start'}
                </Button>
            </Box>
        </Container>
    );
};

export default Tack9

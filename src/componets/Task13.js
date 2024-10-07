import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Task13 = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5 }}>
                <Box>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Timer
                    </Typography>
                    <Typography variant="h6">
                        Time: {time} seconds
                    </Typography>
                    <Box sx={{ my: 5 }}>
                        <Button variant="contained" onClick={handleStart} disabled={isRunning} sx={{ backgroundColor: '#000', color: '#FFF' , mr:2}}>
                            Start
                        </Button>
                        <Button variant="contained" onClick={handleStop} disabled={!isRunning}>
                            Stop
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Task13

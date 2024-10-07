import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Task1 = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4">Counter: {count}</Typography>
            <Box>
                <Button variant="contained" onClick={increment} sx={{ margin: '5px', backgroundColor: '#fff', color: '#000' }}>
                    +
                </Button>
                <Button variant="contained" onClick={decrement} sx={{ margin: '5px', backgroundColor: '#fff', color: '#000' }}>
                    -
                </Button>
            </Box>
        </Container>
    );
};

export default Task1

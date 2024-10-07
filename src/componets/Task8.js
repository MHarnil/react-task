import React, { useState } from 'react';
import { Box, Container, TextField, Typography } from '@mui/material';

const Task8 = () => {
    const [inputValue, setInputValue] = useState('');
    const maxLength = 100;

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <Container style={{ marginTop: '50px', textAlign: 'center' }}>
            <Typography variant="h4">Character Counter</Typography>
            <TextField
                label="Type something..."
                value={inputValue}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={2}
                inputProps={{ maxLength: maxLength }}
                style={{ marginTop: '20px' }}
            />
            <Typography variant="body1" style={{ marginTop: '10px' }}>
                {inputValue.length} / {maxLength} characters
            </Typography>
        </Container>
    );
};

export default Task8

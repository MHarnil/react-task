import { Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Task12 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5 }}>
                <Box>
                    <Typography variant="h4" component="h1" sx={{ display: 'flex', justifyContent: 'center' }} gutterBottom>
                        Window Resize Listener
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center' }}>
                        Current window width: {windowWidth} px
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Task12

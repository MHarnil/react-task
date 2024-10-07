import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Task10 = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4">Shopping Cart</Typography>
            <Box mt={3}>
                <Typography variant="h6">Item Quantity: {quantity}</Typography>
                <Box mt={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={incrementQuantity}
                        style={{ marginRight: '10px' }}
                    >
                        +
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                    >
                        -
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Task10

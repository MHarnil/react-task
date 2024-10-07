import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Task6 = () => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" sx={{display:'flex' , justifyContent:'center' ,alignItems:'center'}}><FavoriteIcon fontSize='inherit' sx={{color:'red'}} /> : {likes}</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleLike}
                style={{ marginTop: '20px', backgroundColor: '#000', color: '#FFF' }}
            >
                Like
            </Button>
        </Container>
    );
};

export default Task6

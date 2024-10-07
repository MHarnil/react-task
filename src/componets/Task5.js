import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const Task5 = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h4">Toggle Dark/Light Mode</Typography>
      <Button
        variant="contained"
        onClick={toggleTheme}   
        sx={{ marginTop: '20px' , backgroundColor: '#000', color: '#FFF' }}
      >
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </Button>
    </Box>
  );
};

export default Task5

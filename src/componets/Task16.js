import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';

const Task16 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPolling, setIsPolling] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!isPolling) return;

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPolling]);

  const togglePolling = () => {
    setIsPolling((prev) => !prev);
  };

  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Polling Data from API
      </Typography>
      {error && <Typography color="error">Error: {error}</Typography>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <Typography>Loading...</Typography>
      )}
      <Button variant="contained" onClick={togglePolling} style={{ marginTop: '20px' }}>
        {isPolling ? 'Stop Polling' : 'Start Polling'}
      </Button>
    </Container>
  );
};

export default Task16

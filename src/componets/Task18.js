import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';

const Task18 = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    };

    const errorCallback = (error) => {
      setError(error.message);
    };

    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      });

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Geolocation Tracker
      </Typography>
      {error && <Typography color="error">Error: {error}</Typography>}
      {position.latitude && position.longitude ? (
        <Typography variant="h6">
          Latitude: {position.latitude.toFixed(6)}, Longitude: {position.longitude.toFixed(6)}
        </Typography>
      ) : (
        <Typography>Fetching location...</Typography>
      )}
    </Container>
  );
};

export default Task18

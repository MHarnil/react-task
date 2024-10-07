import React, { useEffect, useState, useRef } from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Task19 = () => {
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);
  const observer = useRef();

  const imageUrls = [
    'https://via.placeholder.com/300?text=Image+1',
    'https://via.placeholder.com/300?text=Image+2',
    'https://via.placeholder.com/300?text=Image+3',
    'https://via.placeholder.com/300?text=Image+4',
    'https://via.placeholder.com/300?text=Image+5',
    'https://via.placeholder.com/300?text=Image+6',
    'https://via.placeholder.com/300?text=Image+7',
    'https://via.placeholder.com/300?text=Image+8',
    'https://via.placeholder.com/300?text=Image+8',
    'https://via.placeholder.com/300?text=Image+8',
    'https://via.placeholder.com/300?text=Image+8',
  ];

  useEffect(() => {
    setImages(imageUrls);
  }, []);

  useEffect(() => {
    const loadImage = (entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => {
          setLoadedImages((prev) => [...prev, img.dataset.src]);
        };
        observer.current.unobserve(img);
      }
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(loadImage);
    });

    const imgElements = document.querySelectorAll('img[data-src]');
    imgElements.forEach((img) => {
      observer.current.observe(img);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [images]);

  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Lazy Load Images on Scroll
      </Typography>
      <Grid container spacing={2}>
        {images.map((url, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Typography component={'img'}
              data-src={url} // Use data-src for lazy loading
              src="" // Start with empty src
              alt={`Lazy Loaded ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                opacity: loadedImages.includes(url) ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Task19
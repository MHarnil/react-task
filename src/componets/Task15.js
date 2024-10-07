import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, List, ListItem } from '@mui/material';

const Task15 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [results, setResults] = useState([]);

    const data = [
        'USA',
        'Canada',
        'Mexico',
        'Brazil',
        'Argentina',
        'France',
        'Germany',
        'Italy',
        'Spain',
        'Japan',
    ];

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        if (debouncedSearchTerm) {
            const filteredResults = data.filter(item =>
                item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            );
            setResults(filteredResults);
        } else {
            setResults(data);
        }
    }, [debouncedSearchTerm]);

    return (
        <Container style={{ padding: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Search Filter
            </Typography>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <List>
                {results.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Task15

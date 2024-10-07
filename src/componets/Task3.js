import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Select, MenuItem } from '@mui/material';

const Task3 = () => {
    const [formValues, setFormValues] = useState({
        text: '',
        checkbox: false,
        radio: '',
        select: '',
        color: '#000000',
        date: '',
        number: '',
        password: '',
        range: 50,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        alert(JSON.stringify(formValues, null, 2));
    };

    return (
        <Container sx={{ my: '50px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>Form Input Handling</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="text"
                    label="Name"
                    value={formValues.text}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: '20px' }}
                />
                <Box>
                    <FormControlLabel
                        control={<Checkbox name="checkbox" checked={formValues.checkbox} onChange={handleChange} />}
                        label="Right"
                    />
                </Box>
                <FormControl component="fieldset" sx={{ marginBottom: '20px' }}>
                    <FormLabel component="legend">Radio Buttons</FormLabel>
                    <RadioGroup name="radio" value={formValues.radio} onChange={handleChange}>
                        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                    <Select
                        name="select"
                        value={formValues.select}
                        onChange={handleChange}
                        displayEmpty
                    >
                        <MenuItem value="" disabled>Select an Option</MenuItem>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                    </Select>
                </FormControl>

                <Box>
                    <TextField
                        name="color"
                        label="Color Picker"
                        type="color"
                        value={formValues.color}
                        onChange={handleChange}
                        sx={{ marginBottom: '20px', width: '200px' }}
                    />
                </Box>
                <Box>
                    <TextField
                        name="date"
                        label="Date"
                        type="date"
                        value={formValues.date}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ marginBottom: '20px' }}
                    />
                </Box>
                <Box>
                    <TextField
                        name="number"
                        label="Number"
                        type="number"
                        value={formValues.number}
                        onChange={handleChange}
                        sx={{ marginBottom: '20px' }}
                    />
                </Box>
                <Box>
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        value={formValues.password}
                        onChange={handleChange}
                        sx={{ marginBottom: '20px' }}
                    />
                </Box>
                <Box>
                    <TextField
                        name="range"
                        label="Range"
                        type="range"
                        value={formValues.range}
                        onChange={handleChange}
                        sx={{ marginBottom: '20px' }}
                        inputProps={{ min: 0, max: 100 }}
                    />
                </Box>
                <Box>
                    <Button type="submit" variant="contained" sx={{ backgroundColor: '#000', color: '#FFF' }}>
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default Task3

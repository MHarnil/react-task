import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const Task7 = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };
    
    const addTask = () => {
        if (task.trim()) {
            setTasks((prevTasks) => [...prevTasks, task.trim()]);
            setTask('');
        }
    };

    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    return (
        <Container sx={{ marginTop: '50px', textAlign: 'center' }}>
            <Typography variant="h4" sx={{my:4}}>To-Do List</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                    label="Add a new task"
                    value={task}
                    onChange={handleInputChange}
                    sx={{ margin: '20px 0' }}
                />
                <Button variant="contained" onClick={addTask} sx={{ backgroundColor: '#000', color: '#FFF' , height:'100px' }}>
                    Add Task
                </Button>
            </Box>
            <Box mt={11}>
                {tasks.length === 0 ? (
                    <Typography>No tasks added yet!</Typography>
                ) : (
                    <Box sx={{ padding: 0 }}>
                        {tasks.map((task, index) => (
                            <Box key={index} sx={{ margin: '10px 0', display: 'flex', justifyContent: 'center' ,alignItems:'center' }}>
                                <Typography variant="body1">{task}</Typography>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => removeTask(index)}
                                    sx={{ marginLeft: '50px' }}
                                >
                                    Remove
                                </Button>
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default Task7

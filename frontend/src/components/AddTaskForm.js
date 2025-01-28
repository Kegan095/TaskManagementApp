// src/components/AddTaskForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function AddTaskForm({ addTask }) {
    const [task, setTask] = useState({ title: '', description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask({ title: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Title Field */}
            <TextField
                label="Title"
                name="title"
                value={task.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                    backgroundColor: '#FFFFFF', // White background for input
                    borderRadius: '50px', // Bubble look (rounded corners)
                    padding: '8px', // Add some padding for better aesthetics
                }}
            />

            {/* Description Field */}
            <TextField
                label="Description"
                name="description"
                value={task.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                    backgroundColor: '#FFFFFF', // White background for input
                    borderRadius: '50px', // Bubble look (rounded corners)
                    padding: '8px', // Add some padding for better aesthetics
                }}
            />

            {/* Add Task Button */}
            <Button type="submit" variant="contained" color="primary">
                Add Task
            </Button>
        </form>
    );
}

export default AddTaskForm;
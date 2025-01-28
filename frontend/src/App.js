import React, { useState } from 'react';
import { createTheme, ThemeProvider, Button } from '@mui/material';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm'; // Ensure this is imported
import './App.css';

// Define the custom colors for buttons and background
const theme = createTheme({
    palette: {
        primary: {
            main: '#107C10', // Xbox Green (Darker Green)
        },
        secondary: {
            main: '#FF0000', // Red
        },
        custom: {
            yellow: '#FFEA00', // Yellow (Xbox Button)
            blue: '#1F75FE', // Blue (Xbox Button)
        },
    },
});

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Learn React', description: 'Understand the basics of React', important: false, completed: false },
        { id: 2, title: 'Build a Task Manager', description: 'Create a task manager app with React and Spring Boot', important: false, completed: false },
    ]);

    const [selectedTasks, setSelectedTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const markAsCompleted = () => {
        setTasks(
            tasks.map((task) =>
                selectedTasks.includes(task.id)
                    ? { ...task, completed: true }
                    : task
            )
        );
        setSelectedTasks([]); // Clear selected tasks after marking
    };

    const markAsImportant = () => {
        setTasks(
            tasks.map((task) =>
                selectedTasks.includes(task.id)
                    ? { ...task, important: true }
                    : task
            )
        );
        setSelectedTasks([]); // Clear selected tasks after marking
    };

    const filterTasks = () => {
        // You can add filtering logic based on task status (completed, important, etc.)
        // For now, just logging the selected tasks
        console.log('Filtered Tasks:', tasks.filter(task => task.important));
    };

    return (
        <ThemeProvider theme={theme}>
            <div
                style={{
                    textAlign: 'center',
                    backgroundColor: '#2D2D2D',
                    minHeight: '100vh',
                    color: '#107C10',
                    margin: 0,
                }}
            >
                {/* Xbox Style Titles */}
                <div
                    style={{
                        position: 'relative',
                        display: 'inline-block',
                        fontFamily: "'Segoe UI', sans-serif",
                        fontSize: '2rem',
                        color: '#107C10',
                        height: '3rem',
                        lineHeight: '3rem',
                        textAlign: 'center',
                    }}
                >
                    <h1
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: -2,
                            color: '#A1A1A1',
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
                        }}
                    >
                        Game Dev Task Management
                    </h1>
                    <h1
                        style={{
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        Game Dev Task Management
                    </h1>
                </div>

                <AddTaskForm addTask={addTask} />
                <TaskList tasks={tasks} deleteTask={deleteTask} selectedTasks={selectedTasks} setSelectedTasks={setSelectedTasks} />

                {/* Xbox-inspired buttons */}
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: '#107C10',
                        color: '#A1A1A1',
                        marginRight: '10px',
                        fontWeight: 'bold',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        '&:hover': {
                            backgroundColor: '#107C10',
                            color: '#FFFFFF',
                            borderColor: '#107C10',
                        },
                    }}
                    onClick={markAsCompleted}
                >
                    Mark as Complete
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#FFEA00',
                        color: '#000000',
                        marginRight: '10px',
                        '&:hover': {
                            backgroundColor: '#F5D500', // Slightly darker yellow for hover
                        },
                    }}
                    onClick={markAsImportant}
                >
                    Important Task
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#1F75FE',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: '#1A63D7', // Slightly darker blue for hover
                        },
                    }}
                    onClick={filterTasks}
                >
                    Filter Tasks
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default App;
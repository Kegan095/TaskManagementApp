import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

function TaskList({ tasks, deleteTask }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            {tasks.map((task) => (
                <Card
                    key={task.id}
                    style={{
                        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)', // Glossy white gradient
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle 3D effect
                        borderRadius: '10px', // Rounded corners
                        marginBottom: '15px',
                        width: '80%',
                        maxWidth: '500px',
                        padding: '15px',
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" style={{ fontWeight: 'bold', color: '#107C10' }}>
                            {task.title}
                        </Typography>
                        <Typography variant="body2" style={{ marginBottom: '10px' }}>
                            {task.description}
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => deleteTask(task.id)}
                            style={{
                                background: 'linear-gradient(145deg, #FF0000, #CC0000)', // Red glossy effect
                                color: '#ffffff',
                            }}
                        >
                            Delete Task
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default TaskList;

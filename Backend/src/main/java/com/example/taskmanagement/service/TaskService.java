package com.example.taskmanagement.service;

import com.example.taskmanagement.model.Task;
import com.example.taskmanagement.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Get all tasks
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Get task by ID
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    // Create new task
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    // Update task
    public Task updateTask(Long id, Task taskDetails) throws ResourceNotFoundException {
        if (!taskRepository.existsById(id)) {
            throw new ResourceNotFoundException("Task not found with ID: " + id);
        }
        taskDetails.setId(id); // Ensure the ID stays the same
        return taskRepository.save(taskDetails);
    }

    // Delete task
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    // Custom queries
    public List<Task> getTasksByTitle(String title) {
        return taskRepository.findByTitleContaining(title);
    }

    public List<Task> getTasksByCompletionStatus(boolean completed) {
        return taskRepository.findByCompleted(completed);
    }

    public List<Task> getTasksDueBeforeDate(java.util.Date date) {
        return taskRepository.findByDueDateBefore(date);
    }

    public List<Task> getTasksDueAfterDate(java.util.Date date) {
        return taskRepository.findByDueDateAfter(date);
    }

    public List<Task> getTasksDueBetweenDates(java.util.Date startDate, java.util.Date endDate) {
        return taskRepository.findByDueDateBetween(startDate, endDate);
    }

}

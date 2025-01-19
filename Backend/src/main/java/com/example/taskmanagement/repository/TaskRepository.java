package com.example.taskmanagement.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.taskmanagement.model.Task;

import java.util.Date;
import java.util.List;

public interface TaskRepository extends JpaRepository <Task, Long> {
    List<Task> findByTitleContaining(String title);
    List<Task> findByCompleted(boolean completed);
    List<Task> findByDueDateBefore(Date dueDate);
    List<Task> findByDueDateAfter(Date dueDate);
    List<Task> findByDueDateBetween(Date startDate, Date endDate);
}

package com.example.taskmanagement;

import com.example.taskmanagement.model.Task;
import com.example.taskmanagement.repository.TaskRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class TaskRepositoryTests {
 @Autowired
 private TaskRepository taskRepository;

 @Test
 void shouldSaveTask() {
     Task task = new Task(   "Sample Task",
             "This is a sample task.",
             new Date(),
             false);


     Task savedTask = taskRepository.save(task);

     assertThat(savedTask).isNotNull();
  assertThat(savedTask.getId()).isNotNull();
  assertThat(savedTask.getTitle()).isEqualTo("Sample Task");
  assertThat(savedTask.getDescription()).isEqualTo("This is a sample task.");
  assertThat(savedTask.isCompleted()).isFalse();
 }
}

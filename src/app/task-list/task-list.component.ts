import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  task = signal([
    { id: 1, title: 'Task 1', priority: 'High' },
    { id: 2, title: 'Task 2', priority: 'Medium' },
    { id: 3, title: 'Task 3', priority: 'Low' },
    { id: 4, title: 'Task 4', priority: 'High' },
  ]);

  urgentTasks = computed(() =>
    this.task().filter(task => task.priority === 'High')
  );

  addTask() {
    this.task.update(tasks => [...tasks, { id: tasks.length + 1, title: `Task ${tasks.length + 1}`, priority: 'High' }]);
  }
}

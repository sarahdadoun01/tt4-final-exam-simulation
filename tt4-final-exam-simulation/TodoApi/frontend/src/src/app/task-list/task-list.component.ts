import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    tasks: Task[] = [];

    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        this.loadTasks();
    }

    loadTasks(): void {
        this.taskService.getTasks().subscribe((tasks) => {
        this.tasks = tasks;
        });
    }

    deleteTask(id: number): void {
        this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
        });
    }

    toggleComplete(task: Task): void {
        task.completed = !task.completed;
        this.taskService.updateTask(task).subscribe();
    }
}

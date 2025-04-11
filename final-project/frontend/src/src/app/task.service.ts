import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = 'http://localhost:5090/api/tasks';
    private refreshNeeded$ = new Subject<void>();
    refreshNeeded = this.refreshNeeded$.asObservable();

    constructor(private http: HttpClient) {}

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl);
    }

    getTask(id: number): Observable<Task> {
        return this.http.get<Task>(`${this.apiUrl}/${id}`);
    }

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task).pipe(
            tap(() => {
                this.refreshNeeded$.next(); // 🔁 Notify listeners
            })
        );
    }

    updateTask(task: Task): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${task.id}`, task);
    }

    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
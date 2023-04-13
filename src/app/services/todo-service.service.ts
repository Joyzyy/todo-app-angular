import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoModel } from '../models/TodoModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private url: string = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<TodoModel[]> {
    return this.httpClient.get<TodoModel[]>(this.url);
  }

  addTodo(todo: TodoModel): Observable<TodoModel> {
    return this.httpClient.post<TodoModel>(this.url, todo);
  }

  deleteTodo(todo: TodoModel): Observable<TodoModel> {
    return this.httpClient.delete<TodoModel>(`${this.url}/${todo.id}`);
  }

  updateTodo(todo: TodoModel): Observable<TodoModel[]> {
    return this.httpClient.put<TodoModel[]>(`${this.url}/${todo.id}`, todo);
  }
}

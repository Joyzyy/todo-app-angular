import { Component } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { TodoModel } from '../../models/TodoModel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  tabularMenuId: number = 0;
  todos: TodoModel[] = [];

  constructor(private todoService: TodoServiceService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  changeTabularMenuId(id: number) {
    this.tabularMenuId = id;
  }

  addTodo(todoToAdd: TodoModel) {
    let newTodo: TodoModel = { ...todoToAdd, id: this.todos.length + 1 };
    this.todoService.addTodo(newTodo).subscribe(() => this.todos.push(newTodo));
  }

  deleteTodo(todoToDelete: TodoModel) {
    this.todoService
      .deleteTodo(todoToDelete)
      .subscribe(
        () =>
          (this.todos = this.todos.filter(
            (todo) => todo.id !== todoToDelete.id
          ))
      );
  }

  completeTodo(todoToComplete: TodoModel) {
    todoToComplete.completed = !todoToComplete.completed;
    this.todoService
      .updateTodo(todoToComplete)
      .subscribe((todos) => (this.todos = todos));
  }

  editTodo(todoToEdit: TodoModel) {
    this.todoService
      .updateTodo(todoToEdit)
      .subscribe((todos) => (this.todos = todos));
  }
}

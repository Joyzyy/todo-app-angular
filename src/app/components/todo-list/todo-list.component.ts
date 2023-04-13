import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from 'src/app/models/TodoModel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todo: TodoModel;
  @Output() deleteTodo: EventEmitter<TodoModel> = new EventEmitter();
  @Output() completeTodo: EventEmitter<TodoModel> = new EventEmitter();
  @Output() editTodo: EventEmitter<TodoModel> = new EventEmitter();

  constructor() {}

  onDelete() {
    this.deleteTodo.emit(this.todo);
  }

  onChange() {
    this.completeTodo.emit(this.todo);
  }

  onEdit() {
    this.editTodo.emit(this.todo);
  }
}

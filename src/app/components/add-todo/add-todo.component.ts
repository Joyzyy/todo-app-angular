import { Component, EventEmitter, Output } from '@angular/core';
import { TodoModel } from 'src/app/models/TodoModel';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() addTodo: EventEmitter<TodoModel> = new EventEmitter();

  title: string;
  description: string;

  onSubmitForm() {
    if (this.title.length === 0 || this.description.length === 0) {
      alert('Title is required');
      return;
    }

    const todo: TodoModel = {
      id: 0,
      title: this.title,
      description: this.description,
      completed: false,
    };

    this.title = this.description = '';

    this.addTodo.emit(todo);
  }
}

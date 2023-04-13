import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../models/TodoModel';

@Pipe({
  name: 'filterByCompleted',
})
export class TodoPipe implements PipeTransform {
  transform(todos: TodoModel[], completed: boolean): TodoModel[] {
    return todos.filter((todo) => todo.completed === completed);
  }
}

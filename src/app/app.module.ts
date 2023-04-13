import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoPipe } from './pipes/todo.pipe';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, TodoListComponent, TodoPipe, AddTodoComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

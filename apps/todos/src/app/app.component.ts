import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from './model/todo';

@Component({
  selector: 'nx-tryout-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http
      .get<Todo[]>('/api/todos')
      .subscribe(todos => (this.todos = todos));
  }

  addTodo() {
    this.todos.push({
      title: `New Todo ${Math.floor(Math.random() * 10000)}`
    });
  }
}

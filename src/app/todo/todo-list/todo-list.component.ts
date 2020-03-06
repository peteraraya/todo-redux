import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  // Propiedad local que servirá para mostrar los todo list
  todos: Todo[] = [];
  filtro: string;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    // Lo haremos global
    this.store.subscribe(state => {
      this.todos = state.todos;

      this.filtro = state.filtro;
    });
  }

}

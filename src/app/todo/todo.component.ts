import { Component, OnInit } from '@angular/core';
import { ToogleAllTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  // es una bandera que nos permitira saber cuando tengo que marcar o desmarcar todo
  completado : boolean = false; 

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  toogleAll(){
    this.completado = ! this.completado;

    console.log(this.completado);

    const accion = new ToogleAllTodoAction(this.completado);

    this.store.dispatch( accion );
  }

}

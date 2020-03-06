import { Component, OnInit } from '@angular/core';
// importamos las acciones para asegurarnos que estan bien escrita las acciones
import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ThrowStmt } from '@angular/compiler';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes:number;

  // utilizaremos el arreglo de filtros validos para crear footer de forma dinamica
  filtrosValidos:  fromFiltro.filtrosValidos [] = ['todos', 'completados','pendientes'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    // notifica si se cambia el estado en alguna otra pantalla
      this.store.subscribe( state => {
        this.contarPendientes( state.todos );
        this.filtroActual = state.filtro;
    });
  }


  cambiarFiltro( nuevoFiltro: fromFiltro.filtrosValidos){

    // para disparar la acción necesitamos disparar el store

    // definimos la acción

    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);

    // hacemos dispath

    this.store.dispatch(accion);
  }

  contarPendientes( todos: Todo[] ){
    // de esta manera extraigo cuantos registro hay en este arreglo
    this.pendientes = todos.filter( todos => !todos.completado ).length;
  }

  borrarTodo(){

    const accion = new fromTodo.BorrarAllTodoAction();

    this.store.dispatch(accion);
  }
}

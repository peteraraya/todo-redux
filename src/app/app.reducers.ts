import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from  './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.actions';

export interface AppState {
    todos: Todo[]; // tendremos una lista de todos
    filtro: fromFiltroActions.filtrosValidos; // utilizaremos el filtro
}



// sera una combinación de todos los reducer que use mi aplicación

export const appReducers: ActionReducerMap<AppState> = {
        // implementa interfaz
        todos: fromTodo.todoReducer, 
        filtro: fromFiltro.filtroReducer      
};
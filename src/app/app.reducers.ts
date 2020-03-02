import { Todo } from './todo/model/todo.model';


export interface AppState {
    todos: Todo[]; // tendremos una lista de todos
}
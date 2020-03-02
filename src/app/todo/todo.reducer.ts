import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';
import { from } from 'rxjs';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el Mundo');
const todo3 = new Todo('Pedir prestado el traje de IronMan');

todo2.completado = true;

// Estado - es un arreglo de todos
const estadoInicial: Todo[] = [todo1,todo2, todo3];



export function todoReducer ( state = estadoInicial,
                              action: fromTodo.Acciones): Todo[]{ // mi reducer siempre me regresará una lista de todo

       switch (action.type) {

        // Agregar una nueva tarea
            case fromTodo.AGREGAR_TODO:
                 const todo = new Todo( action.texto ); // nueva Instancia de un todo
                //  state.push(todo); de esta forma jamas podremos rastrear las acciones - siempre debemos regresar un nuevo arreglo
                return [ ...state, todo ]; // ...state : estoy clonando un nuevo arreglo + el nuevo todo

            case fromTodo.TOOGLE_TODO:
                return state.map( todoEdit => {
                        if (todoEdit.id === action.id) {
                            return {
                                // clona toda las propiedades con el operador  spread
                                ...todoEdit,
                                completado : !todoEdit.completado
                            };
                        } // si no es el mismo
                        else{
                            return todoEdit;
                        }
                });

            case fromTodo.TOOGLE_ALL_TODO:
                return state.map( todoEdit => {
                    return{
                        ...todoEdit,
                        completado: action.completado
                    };
                });
        // la clave principal es siempre retornar nuevos estados nunca mutar la información anterior
           case fromTodo.EDITAR_TODO:
               return state.map(todoEdit => {
                   if (todoEdit.id === action.id) {
                       return {
                           // clona toda las propiedades con el operador  spread
                           ...todoEdit,
                           texto: action.texto // este tiene que ser diferente
                       };
                   } // si no es el mismo
                   else {
                       return todoEdit;
                   }
               });


            case fromTodo.BORRAR_TODO:
                return state.filter( todoEdit => todoEdit.id !== action.id); // filter : regresa un nuevo arreglo que cumplan una nueva condición
                // va regresar un nuevo arreglo pero que dicho arreglo sea diferente al id que estoy mandando y eso es lo que voy a regresar al state
           default:
               return state;
       }

}
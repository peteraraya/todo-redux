import { Action } from '@ngrx/store';

export const AGREGAR_TODO  = '[TODO] Agregar todo';

export const TOOGLE_TODO   = '[TODO] Toogle todo';
export const TOOGLE_ALL_TODO   = '[TODO] ToogleAll todo';


export const EDITAR_TODO   = '[TODO] Editar todo';
export const BORRAR_TODO   = '[TODO] Borrar todo';

export const BORRAR_ALL_TODO = '[TODO] Borrar All todo';


// Clases
export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;

    constructor( public texto: string ) {}
}

export class ToogleTodoAction implements Action {
    readonly type = TOOGLE_TODO;

    constructor(public id: number) { }
}
export class ToogleAllTodoAction implements Action {
    readonly type = TOOGLE_ALL_TODO;

    constructor(public completado: boolean) { }
}
export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string ) { }
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) { }
}


export class BorrarAllTodoAction implements Action {
    readonly type = BORRAR_ALL_TODO;

}


export type Acciones =  AgregarTodoAction  |
                        EditarTodoAction   |
                        BorrarTodoAction   |
                        BorrarAllTodoAction |
                        ToogleTodoAction   |
                        ToogleAllTodoAction ;
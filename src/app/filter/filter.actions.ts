
import { Action } from '@ngrx/store';

// Acciones que voy a llamar
export const SET_FILTRO = '[Filter] Set Filtro';


export type filtrosValidos = 'todos' | 'completados' | 'pendientes';


// Las clases para crear acciones de estos tipos
export class SetFiltroAction implements Action{
        readonly type = SET_FILTRO;

    constructor(public filtro: filtrosValidos ){} // reemplazo string por filtros validos
}

// exportar acciones validas - siempre es recomendable hacerlo aun uqe tengamos una opción

export type acciones = SetFiltroAction;


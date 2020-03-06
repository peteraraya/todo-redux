// importamos todo
import * as fromFiltro from './filter.actions';

// Definimos el estado inicial

const estadoInicial : fromFiltro.filtrosValidos = 'completados';


export function filtroReducer ( state = estadoInicial,
                                action: fromFiltro.acciones): fromFiltro.filtrosValidos {


        switch (action.type) {
        
            case fromFiltro.SET_FILTRO:
                  return action.filtro

            default:
                return state
        }

    }

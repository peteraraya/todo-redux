import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToogleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  // Recibiremos el elemnto del padre
   @Input() todo: Todo;
  // obtengo todas las propiedades del elemento html
  @ViewChild('txtInputFisico',{static:false}) txtInputFisico: ElementRef;

   // Controlaremos el check
   chkField: FormControl;
   txtInput: FormControl;

   editando: boolean;

  constructor( private store: Store<AppState>) { }



  ngOnInit() {
    console.log(this.todo);
    
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    // escuchando cualquier cambio de este check
    this.chkField.valueChanges
        .subscribe( valor =>{
          console.log(valor);
          // Crear acción
          const accion = new ToogleTodoAction( this.todo.id);
          // cada vez que se cambie el chkField va disparar la acción
          this.store.dispatch( accion );
        });
  }

  editar(){
    this.editando = true;
    // coloco una milesima para que no se haga el mismo tiempo
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
    
  }

  terminarEdicion(){
    this.editando = false;
    // validación si el el texto es invalido no hago nada
    if ( this.txtInput.invalid) {
      return;
    }
    // si es igual no hago ningun cambio
    if (this.txtInput.value === this.todo.texto) {
      return;
    }


    const accion = new EditarTodoAction( this.todo.id, this.txtInput.value);
    // disaramos la accion
    this.store.dispatch(accion);
    console.log('Terminar la acción')
  }

  borrarTodo(){
    const accion = new BorrarTodoAction( this.todo.id);

    // disparamos
    this.store.dispatch( accion );
  }

}

// Agregamos Input para poder recibir props del componente padre
// Agregamos Output y EventEmitter para poder mandar informacion al padre
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit {
  // Creamos las variables a las que puede acceder este componente
  name: string = 'Christos';

  // Creamos output para este componente, de tipo EventEmitter para enviar datos al padre
  // Los datos son de tipo string para este caso
  @Output() messageEmitter: EventEmitter<string> = new EventEmitter<string>();

  // Creamos inputs para este componente, los cuales los recibimos del componente padre
  @Input() nameInput: string = 'Christos Input';

  constructor() {}

  // El metodo ngOnInit se acciona al iniciar el componente
  ngOnInit(): void {
    // Imprimimos por consola una variable de esta clase accediendo a ella con this.<variable>
    console.log(this.name);
  }

  // Funcion detonada por el evento click de la vista
  emitterAlert() {
    // Utilizamos el metodo emit de la clase EventEmitter en nuestro messageEmitter pasando un string
    this.messageEmitter.emit(this.name);
  }
}

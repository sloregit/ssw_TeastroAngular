import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
})
export class InserimentoComponent {
  @Output() passaNomeEmitter = new EventEmitter();
  passaNome($event) {
    this.passaNomeEmitter.emit($event.target.value.toString());
  }
  constructor() {}
}

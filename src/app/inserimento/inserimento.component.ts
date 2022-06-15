import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
})
export class InserimentoComponent {
  @Output() passaNomeEmitter = new EventEmitter();
  passaNome($event) {
    let nome = $event.toString();
    this.passaNomeEmitter.emit($event.target.value);
  }
  constructor() {}
}

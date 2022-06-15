import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
})
export class InserimentoComponent implements OnInit {
  @Output() passaNomeEmitter = new EventEmitter();
  passaNome($event) {
    this.passaNomeEmitter.emit($event.target.value);
  }
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
})
export class InserimentoComponent implements OnInit {
  @Output() passanomeEmitter = new EventEmitter<string>();
  passaNome($event) {
    this.passanomeEmitter.emit($event.target.value);
  }
  constructor() {}

  ngOnInit() {}
}

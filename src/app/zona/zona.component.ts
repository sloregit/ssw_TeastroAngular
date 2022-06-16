import { Component, OnInit, Input, Output } from '@angular/core';

export class zona {
  prenotazioni;
  file;
  postiPerFila;
  constructor(prenotazioni, file, postiPerFila) {
    this.prenotazioni = prenotazioni;
    this.file = file;
    this.postiPerFila = postiPerFila;
  }
}

@Component({
  selector: 'app-zona',
  templateUrl: './zona.component.html',
  styleUrls: ['./zona.component.css'],
})
export class ZonaComponent implements OnInit {
  @Input() zona: zona;
  constructor() {}

  ngOnInit() {
    console.log(this.zona);
  }
}

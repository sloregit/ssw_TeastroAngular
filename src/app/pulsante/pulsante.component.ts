import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  @Input() etichetta: string;
  @Input() nomePosto: string;
  @Output() mostraNomeEmitter = new EventEmitter<object>();
  evidenzia: boolean = false;
  selezionati = [];

  //invia al parent i dati del pulsante cliccato(this)
  //possono esser selezionati più posti

  mostraNome() {
    try {
      if (this.evidenzia == true) {
        this.evidenzia = false;
      } else {
        this.evidenzia = true;
      }
      this.mostraNomeEmitter.emit(this);
    } catch (e: any) {
      console.error('errore in: Pulsante.mostraNome', e.message, e.name);
    }
  }
  //modifica lo stile dell'ultimo pulsante cliccato e dei posti prenotati
  //  [ngStyle]="stile()"

  constructor() {}
  ngOnInit() {}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  @Input() etichetta: string;
  @Input() nomePosto: string;
  @Input() rapido: boolean;
  @Output() mostraNomeEmitter = new EventEmitter<object>();
  evidenzia: boolean = false;
  @Input() prenotato: boolean;
  //invia al parent i dati del pulsante cliccato(this)
  //possono esser selezionati più posti in caso di prenotazione ordinaria
  mostraNome() {
    try {
      if (!this.rapido && !this.prenotato) {
        if (this.evidenzia == true) {
          this.evidenzia = false;
        } else {
          this.evidenzia = true;
        }
      }
      this.mostraNomeEmitter.emit(this);
    } catch (e: any) {
      console.error('errore in: Pulsante.mostraNome', e.message, e.name);
    }
  }
  constructor() {}
  ngOnInit() {}
}

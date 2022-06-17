import {
  Component,
  Injectable,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  @Input() etichetta: string;
  @Input() nome: string;
  @Output() mostraNomeEmitter = new EventEmitter<object>();
  evidenzia: boolean;
  //invia al parent i dati del pulsante cliccato(this)
  mostraNome() {
    try {
      this.evidenzia = true;
      this.mostraNomeEmitter.emit(this);
    } catch (e: any) {
      console.error('errore in: Pulsante.mostraNome', e.message, e.name);
    }
  }
  //modifica lo stile dell'ultimo pulsante cliccato e dei posti prenotati
  stile() {
    if (this.evidenzia == true) {
      this.evidenzia = false;
      return { 'background-color': 'green' };
    }
    return { 'background-color': this.nome != 'x' ? 'red' : 'turquoise' };
  }
  constructor() {}
  ngOnInit() {}
}

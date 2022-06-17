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
  @Input() nomePosto: string;
  @Output() mostraNomeEmitter = new EventEmitter<object>();
  evidenzia: boolean;
  //invia al parent i dati del pulsante cliccato(this)
  //possono esser selezionati più posti
  c() {
    console.log('c');

    console.log(this);
  }
  mostraNome() {
    try {
      if (this.evidenzia == true) {
        this.evidenzia = false;
      } else {
        this.evidenzia = true;
      }
      this.mostraNomeEmitter.emit(this);
      this.mostraNomeEmitter.subscribe((val) => console.log(val));
    } catch (e: any) {
      console.error('errore in: Pulsante.mostraNome', e.message, e.name);
    }
  }
  //modifica lo stile dell'ultimo pulsante cliccato e dei posti prenotati
  stile() {
    if (this.evidenzia == true) {
      return { 'background-color': 'green' };
    } else if (this.evidenzia == false) {
      return { 'background-color': 'turquoise' };
    }
    return { 'background-color': this.nomePosto != 'x' ? 'red' : 'turquoise' };
  }
  constructor() {}
  ngOnInit() {}
}

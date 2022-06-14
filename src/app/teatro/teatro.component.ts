import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { PulsanteComponent } from '../pulsante/pulsante.component';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  title: string = 'Inserisci il tuo nome, seleziona il posto e premi conferma';
  @Input() prenotazioni;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  selezionato: object;
  nome: string;
  fila: number;
  posto: number;
  @Output() eliminaTeatroEmitter = new EventEmitter();
  constructor() {}
  eliminaTeatro() {
    this.prenotazioni = undefined;
    this.eliminaTeatroEmitter.emit(this.prenotazioni);
  }

  //@Output in pulsante: click del pulsante x vedere il nome

  /////RIPARTI DA QUIIIIII il pusante contiene la prenotazione da aggiornare
  mostraPrenotazione($event, fila, posto) {
    if ($event.nome != 'x') {
      this.nome = $event.nome;
    }
    this.selezionato = $event;
    this.fila = fila;
    this.posto = posto;
    console.log(
      'prenotazione: ' +
        this.nome +
        ' fila: ' +
        this.fila +
        ' posto: ' +
        this.posto
    );
  }
  //isSelezionato($event) {}
  ngOnInit() {
    this.platea = this.prenotazioni.platea;
    this.palco = this.prenotazioni.palco;
  }
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

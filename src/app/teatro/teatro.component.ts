import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
export interface Prenotazione {
  zona: string;
  fila: number;
  posto: number;
}
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
  nome: string;
  nomeDaInserire: string;
  nuovaPrenotazione: Prenotazione;
  evidenzia: boolean;
  nomePrenotazione($event: string) {
    this.nomeDaInserire = $event;
  }
  @Output() eliminaTeatroEmitter = new EventEmitter();
  constructor() {}
  eliminaTeatro() {
    this.prenotazioni = undefined;
    this.eliminaTeatroEmitter.emit(this.prenotazioni);
  }
  prenota() {
    //a seconda della zona
    if (this.nuovaPrenotazione.zona === 'platea') {
      this.prenotazioni.platea[this.nuovaPrenotazione.fila][
        this.nuovaPrenotazione.posto
      ] = this.nomeDaInserire;
    }
    if (this.nuovaPrenotazione[0] === 'palco') {
      this.prenotazioni.palco[this.nuovaPrenotazione.fila][
        this.nuovaPrenotazione.posto
      ] = this.nomeDaInserire;
    }
    console.log(this.prenotazioni);
  }
  //@Output in pulsante: click del pulsante x vedere il nome
  mostraPrenotazione($event, fila: number, posto: number, zona: string) {
    if ($event.nome != 'x') {
      this.nome = $event.nome;
    }
    console.log(this.nuovaPrenotazione);
    this.nuovaPrenotazione.fila = fila;
    this.nuovaPrenotazione.posto = posto;
    this.nuovaPrenotazione.zona = zona;
  }
  //isSelezionato($event) {}
  ngOnInit() {
    this.platea = this.prenotazioni.platea;
    this.palco = this.prenotazioni.palco;

    console.log(this.platea);
  }
}

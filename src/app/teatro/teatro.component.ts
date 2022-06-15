import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  zona;
  nomeDaInserire;
  nuovaPrenotazione;
  evidenzia;
  nomePrenotazione($event) {
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
    if (this.nuovaPrenotazione[0] === 'platea') {
      this.prenotazioni.platea[this.nuovaPrenotazione[1]][
        this.nuovaPrenotazione[2]
      ] = this.nomeDaInserire;
    }
    if (this.nuovaPrenotazione[0] === 'palco') {
      this.prenotazioni.palco[this.nuovaPrenotazione[1]][
        this.nuovaPrenotazione[2]
      ] = this.nomeDaInserire;
    }
    console.log(this.prenotazioni);
  }
  //@Output in pulsante: click del pulsante x vedere il nome
  mostraPrenotazione($event, fila, posto, zona) {
    if ($event.nome != 'x') {
      this.nome = $event.nome;
    }
    //this.evidenzia = false;
    //this.evidenzia = true;
    this.zona = zona;
    this.selezionato = $event;
    this.fila = fila;
    this.posto = posto;
    this.nuovaPrenotazione = [this.zona, this.fila, this.posto];
    console.log(this.evidenzia);
  }
  //isSelezionato($event) {}
  ngOnInit() {
    this.platea = this.prenotazioni.platea;
    this.palco = this.prenotazioni.palco;
  }
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teatro } from '../app.component';

export class Prenotazione {
  zona: string;
  fila: number;
  posto: number;
  constructor(zona: string, fila: number, posto: number) {
    this.zona = zona;
    this.fila = fila;
    this.posto = posto;
  }
}
export class Pulsante {
  etichetta: string;
  nome: string;
  zona: string;
  fila: number;
  posto: number;
  constructor(etichetta, nome, zona, fila, posto) {
    this.etichetta = etichetta;
    this.nome = nome;
    this.zona = zona;
    this.fila = fila;
    this.posto = posto;
  }
}
@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  title: string = 'Inserisci il nome, seleziona il posto e premi conferma';
  @Input() prenotazioni;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  nome: string;
  nomeDaInserire: string;
  nuovaPrenotazione: Prenotazione;
  evidenzia: boolean;
  pulsante;
  @Input() teatro: Teatro;
  constructor() {}
  generaPulsanti(etichetta, nome, zona, fila, posto) {
    return new Pulsante(etichetta, nome, zona, fila, posto);
  }
  //torna alla pagina iniziale visualizzataSE(ngIf prenotazioni != undefined)
  @Output() eliminaTeatroEmitter = new EventEmitter();
  eliminaTeatro() {
    this.teatro = undefined;
    this.eliminaTeatroEmitter.emit(this.teatro);
  }

  //@output in "InserimentoComponent" nomeDaInserire = input utente
  nomePrenotazione($event: string) {
    this.nomeDaInserire = $event;
  }

  //pulsante Conferma
  //inserisce il contenuto dell'input nelle prenotazioni, poi invia al DB
  prenota() {
    //a seconda della zona
    if (this.nuovaPrenotazione.zona === 'platea') {
      this.teatro.platea[this.nuovaPrenotazione.fila][
        this.nuovaPrenotazione.posto
      ] = this.nomeDaInserire;
    } else if (this.nuovaPrenotazione.zona === 'palco') {
      this.teatro.palco[this.nuovaPrenotazione.fila][
        this.nuovaPrenotazione.posto
      ] = this.nomeDaInserire;
    }
    console.log(this.teatro.prenotazioni);
  }

  //@Output in pulsante: click del pulsante x vedere il nome + genera la prenotazione
  mostraPrenotazione($event, zona: string, fila: number, posto: number) {
    if ($event.nome != 'x') {
      this.nome = $event.nome;
    }
    this.nuovaPrenotazione = new Prenotazione(zona, fila, posto);
    console.log(this.nuovaPrenotazione);
  }
  //invocata dopo la generazione del component
  //this.prenotazioni sarà pronto quando OnInit è invocata
  ngOnInit() {
    this.platea = this.teatro.platea;
    this.palco = this.teatro.palco;

    console.log('teatroComponent');
    console.log(this.teatro);
  }
}

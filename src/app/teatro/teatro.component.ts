import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teatro } from '../app.component';

export class Prenotazione {
  nome: string;
  zona: string;
  fila: number;
  posto: number;
  constructor(nome: string, zona: string, fila: number, posto: number) {
    this.nome = nome;
    this.zona = zona;
    this.fila = fila;
    this.posto = posto;
  }
}
//Per la prenotazioni multiple
//aggiunge le prenotazioni se il pulsante è selezionato,la elimina altrimenti

export class PrenotazioneMultipla {
  selezionati: Array<Prenotazione>;
  constructor() {
    this.selezionati = [];
  }
  aggiungi(prenotazione: Prenotazione) {
    this.selezionati.push(prenotazione);
  }
  rimuovi(fila: number, posto: number) {
    this.selezionati.map((old, i) => {
      if (old.fila === fila && old.posto === posto) {
        this.selezionati.splice(i, 1);
      }
    });
  }
}

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  title: string = 'Seleziona il posto e premi conferma';
  @Input() teatro: Teatro;
  @Input() nomePrenotazione: string;
  rapido: boolean;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  nomePosto: string;
  evidenzia: boolean;
  nuovaPrenotazione: Prenotazione;
  prenotaMultipla: PrenotazioneMultipla = new PrenotazioneMultipla();
  constructor() {}
  //torna alla pagina iniziale visualizzataSE(ngIf prenotazioni != undefined)
  @Output() eliminaTeatroEmitter = new EventEmitter();
  eliminaTeatro() {
    this.teatro = undefined;
    this.eliminaTeatroEmitter.emit(this.teatro);
  }
  //pulsante Conferma prenotazioni ordinarie
  //inserisce il contenuto dell'input nelle prenotazioni, poi invia al DB
  prenota() {
    if (!this.rapido) {
      
    }
  }

  //@Output in pulsante: click del pulsante x vedere il nome + genera la prenotazione
  mostraPrenotazione($event, zona: string, fila: number, posto: number) {
    this.nomePosto = $event.nomePosto;
    this.evidenzia = $event.evidenzia;
    //se il posto è libero
    if (this.nomePosto === 'x') {
      //modalità rapida => clicco e prenoto
      if (this.rapido) {
        this.teatro[this.nuovaPrenotazione.zona][this.nuovaPrenotazione.fila][
          this.nuovaPrenotazione.posto
        ] = this.nomePrenotazione;
      }
      //modalità ordinaria => clicco e lo aggiungo alle prenotazioni
      if (!this.rapido) {
        //se è selezionato
        if (this.evidenzia === true) {
          this.nuovaPrenotazione = new Prenotazione(
            this.nomePosto,
            zona,
            fila,
            posto
          );
          this.prenotaMultipla.aggiungi(this.nuovaPrenotazione);
        }
        //lo rimuovo se è deselezionato
        else {
          this.prenotaMultipla.rimuovi(fila, posto);
        }
      }
    }
  }
  //invocata dopo la generazione del component
  //this.prenotazioni sarà pronto quando OnInit è invocata
  ngOnInit() {
    this.platea = this.teatro.platea;
    this.palco = this.teatro.palco;
    this.rapido = this.teatro.rapido;
  }
}

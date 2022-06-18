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
/*
PrenotazioneMultipla {selezionati: Array[2]}
selezionati: Array[2]
0: Prenotazione
fila: 3
nome: "x"
posto: 3
zona: "platea"
__proto__: Prenotazione
1: Prenotazione
__proto__: PrenotazioneMultipla
 */
export class PrenotazioneMultipla {
  selezionati: Array<Prenotazione>;
  constructor() {
    this.selezionati = [];
  }
  aggiungi(prenotazione: Prenotazione) {
    this.selezionati.push(prenotazione);
    console.log('aggiunto: ' + prenotazione);
    console.log(this.selezionati);
  }
  rimuovi(prenotazione: Prenotazione) {
    this.selezionati.map((old, i) => {
      if (old.fila === prenotazione.fila && old.posto === prenotazione.posto) {
        this.selezionati.splice(i, 1);
        console.log('rimosso: ' + this.selezionati[i]);
      }
    });
    console.log(this.selezionati);
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
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  nomePosto: string;
  prenotaMultipla: PrenotazioneMultipla = new PrenotazioneMultipla();
  @Input() nomePrenotazione: string;
  nuovaPrenotazione: Prenotazione;
  evidenzia: boolean;
  constructor() {}
  //torna alla pagina iniziale visualizzataSE(ngIf prenotazioni != undefined)
  @Output() eliminaTeatroEmitter = new EventEmitter();
  eliminaTeatro() {
    this.teatro = undefined;
    this.eliminaTeatroEmitter.emit(this.teatro);
  }

  //pulsante Conferma
  //inserisce il contenuto dell'input nelle prenotazioni, poi invia al DB
  prenota() {
    if (this.nomePosto === 'x') {
      //a seconda della zona
      if (this.nuovaPrenotazione.zona === 'platea') {
        this.teatro.platea[this.nuovaPrenotazione.fila][
          this.nuovaPrenotazione.posto
        ] = this.nomePrenotazione;
      } else if (this.nuovaPrenotazione.zona === 'palco') {
        this.teatro.palco[this.nuovaPrenotazione.fila][
          this.nuovaPrenotazione.posto
        ] = this.nomePrenotazione;
      }
    } else {
      console.log('posto prenotato');
    }
  }

  //@Output in pulsante: click del pulsante x vedere il nome + genera la prenotazione
  mostraPrenotazione($event, zona: string, fila: number, posto: number) {
    this.nomePosto = $event.nomePosto;
    this.evidenzia = $event.evidenzia;
    if ($event.nomePosto != 'x') {
      alert('Il posto è già prenotato');
    }
    if ($event.evidenzia === true) {
      this.nuovaPrenotazione = new Prenotazione(
        $event.nomePosto,
        zona,
        fila,
        posto
      );
      this.prenotaMultipla.aggiungi(this.nuovaPrenotazione);
    } else {
      this.prenotaMultipla.rimuovi(this.nuovaPrenotazione);
    }
  }
  //invocata dopo la generazione del component
  //this.prenotazioni sarà pronto quando OnInit è invocata
  ngOnInit() {
    this.platea = this.teatro.platea;
    this.palco = this.teatro.palco;
  }
}

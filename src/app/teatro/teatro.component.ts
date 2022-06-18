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

export class PrenotazioneMultipla {
  selezionati: Array<Prenotazione>;
  constructor() {}
  aggiungi(prenotazione: Prenotazione) {
    this.selezionati.push(prenotazione);
  }
  rimuovi(prenotazione: Prenotazione) {
    for (let elem in this.selezionati) {
    }
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
  prenotaMultipla: Array<Prenotazione> = [];
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
  mostraPrenotazione(
    $event,
    zona: string,
    fila: number,
    posto: number,
    evidenzia
  ) {
    this.nomePosto = $event.nomePosto;
    this.evidenzia = $event.evidenzia;
    if ($event.nomePosto != 'x') {
      alert('Il posto è già prenotato');
    }
    this.nuovaPrenotazione = new Prenotazione(
      $event.nomePosto,
      zona,
      fila,
      posto
    );
    console.log($event);
  }
  //invocata dopo la generazione del component
  //this.prenotazioni sarà pronto quando OnInit è invocata
  ngOnInit() {
    this.platea = this.teatro.platea;
    this.palco = this.teatro.palco;
  }
}

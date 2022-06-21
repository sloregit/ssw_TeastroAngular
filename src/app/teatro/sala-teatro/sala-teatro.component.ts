import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  selector: 'app-sala-teatro',
  templateUrl: './sala-teatro.component.html',
  styleUrls: ['./sala-teatro.component.css'],
})
export class SalaTeatroComponent implements OnInit {
  @Input() prenotazioni;
  @Input() rapido;
  @Input() nomePrenotazione: string;
  @Output() inviaPrenotazioniEmitter = new EventEmitter();

  nomePosto: string;
  evidenzia: boolean;
  nuovaPrenotazione: Prenotazione;
  prenotaMultipla: PrenotazioneMultipla = new PrenotazioneMultipla();
  prenotato: boolean;
  constructor() {}
  mostraPrenotazione($event, zona: string, fila: number, posto: number) {
    this.nomePosto = $event.nomePosto;
    this.evidenzia = $event.evidenzia;
    //se il posto è libero
    if (this.nomePosto === 'x') {
      //modalità rapida => clicco e prenoto
      if (this.rapido && !this.prenotato) {
        this.nuovaPrenotazione = new Prenotazione(
          this.nomePosto,
          zona,
          fila,
          posto
        );
        this.prenotazioni[this.nuovaPrenotazione.fila][
          this.nuovaPrenotazione.posto
        ] = this.nomePrenotazione;
        this.prenotato = true;
        this.inviaPrenotazioniEmitter.emit(this.prenotazioni);
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
  ngOnInit() {}
}

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

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  title: string = 'Inserisci il tuo nome, seleziona il posto e premi conferma';
  @Input() prenotazioni;
  platea: zona;
  palco: Array<Array<string>>;
  //selezionato: object;
  nome: string;
  //fila: number;
  //posto: number;
  //zona;
  nomeDaInserire;
  nuovaPrenotazione;
  evidenzia;
  nomePrenotazione($event: string) {
    this.nomeDaInserire = $event;
  }
  @Output() eliminaTeatroEmitter = new EventEmitter();
  constructor() {}
  eliminaTeatro() {
    this.prenotazioni = undefined;
    this.eliminaTeatroEmitter.emit(this.prenotazioni);
  }

  /*prenota() {
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
  }*/
  //@Output in pulsante: click del pulsante x vedere il nome
  mostraPrenotazione($event) {
    if ($event.nome != 'x') {
      this.nome = $event.nome;
    }
    console.log(this.nome);
  }
  //isSelezionato($event) {}
  ngOnInit() {
    this.platea = new zona(
      this.prenotazioni.platea,
      this.prenotazioni.platea.length,
      this.prenotazioni.platea[0].length
    );
    this.palco = this.prenotazioni.palco;
  }
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

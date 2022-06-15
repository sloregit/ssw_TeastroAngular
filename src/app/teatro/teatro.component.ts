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
  zona;
  nuovaPrenotazione;
  nomePrenotazione($event) {
    console.log($event);
    //return (this.nuovaPrenotazione[3] = $event);
  }
  @Output() eliminaTeatroEmitter = new EventEmitter();
  constructor() {}
  eliminaTeatro() {
    this.prenotazioni = undefined;
    this.eliminaTeatroEmitter.emit(this.prenotazioni);
  }

  prenota() {
    console.log(this.nuovaPrenotazione);
    console.log(this.prenotazioni);
    if (this.nuovaPrenotazione[0] === 'platea') {
      this.prenotazioni.platea[this.nuovaPrenotazione[1]][
        this.nuovaPrenotazione[2]
      ] = this.nuovaPrenotazione[3];
    }
    if (this.nuovaPrenotazione[0] === 'palco') {
      this.prenotazioni.palco[this.nuovaPrenotazione[1]][
        this.nuovaPrenotazione[2]
      ] = this.nuovaPrenotazione[3];
    }
    console.log(this.prenotazioni);
  }
  //@Output in pulsante: click del pulsante x vedere il nome

  /////RIPARTI DA QUIIIIII il pusante contiene la prenotazione da aggiornare
  mostraPrenotazione($event, fila, posto, zona) {
    if ($event.nome != 'x') {
      this.nome = $event.nome;
    }
    this.zona = zona;
    this.selezionato = $event;
    this.fila = fila;
    this.posto = posto;
    this.nuovaPrenotazione = [this.zona, this.fila, this.posto];
    /*console.log(
      'zona:' +
        this.zona +
        ' prenotazione: ' +
        this.nome +
        ' fila: ' +
        this.fila +
        ' posto: ' +
        this.posto
    );*/
  }
  //isSelezionato($event) {}
  ngOnInit() {
    this.platea = this.prenotazioni.platea;
    this.palco = this.prenotazioni.palco;
  }
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

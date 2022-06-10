import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { PulsanteComponent } from '../pulsante/pulsante.component';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  title: string = 'Seleziona il posto, inserisci il tuo nome e premi conferma';
  @Input() prenotazioni;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  nome: string;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  @Output() eliminaTeatroEmitter = new EventEmitter();

  constructor() {
    //this.prenotazioni.subscribe((val) => console.log(val));
  }
  eliminaTeatro() {
    this.prenotazioni = undefined;
    this.eliminaTeatroEmitter.emit(this.prenotazioni);
  }

  //@Output in pulsante: click del pulsante x vedere il nome
  mostraPrenotazione($event) {
    this.nome = $event;
  }
  ngOnInit() {
    this.platea = this.prenotazioni.platea;
    this.palco = this.prenotazioni.palco;
  }
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { PulsanteComponent } from '../pulsante/pulsante.component';

import { TeatroDBService } from '../teatro-db.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

export interface Prenotazioni {
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
}

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  //a = new PulsanteComponent();
  @Input() prenotazioni;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  nome: string;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  //@Output() getTeatro = new EventEmitter();

  constructor(private TeatroDBservice: TeatroDBService) {
    //this.prenotazioni.subscribe((val) => console.log(val));
    console.log(this.prenotazioni);
  }
  indietro(){
    this.prenotazioni = undefined;
  }
  mostraPrenotazione($event) {
    this.nome = $event;
  }
  ngOnInit() {
    console.log(this.prenotazioni);
  }
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

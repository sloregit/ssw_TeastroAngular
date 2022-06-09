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
export class TeatroComponent implements OnInit, Prenotazioni {
  //a = new PulsanteComponent();
  @Input() prenotazioni: Prenotazioni;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  nome: string;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  @Output() getTeatro = new EventEmitter<string>();
  constructor(private TeatroDBservice: TeatroDBService) {}
  mostraPrenotazione($event) {
    this.nome = $event;
  }
  ngOnInit() {
    console.log(this.prenotazioni);
  }
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

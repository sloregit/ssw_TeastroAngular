import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { PulsanteComponent } from '../pulsante/pulsante.component';

import { TeatroDBService } from '../teatro-db.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  //a = new PulsanteComponent();
  @Input() prenotazioni;
  nome: string;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  constructor(private TeatroDBservice: TeatroDBService) {
    console.log(this.prenotazioni);
  }
  mostraPrenotazione($event) {
    this.nome = $event;
  }
  ngOnInit() {}
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

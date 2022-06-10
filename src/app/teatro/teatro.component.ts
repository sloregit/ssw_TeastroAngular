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
  prenotazioni: Prenotazioni;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  nome: string;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  mostraTeatro() {}
  constructor(private TeatroDBservice: TeatroDBService) {
    //this.prenotazioni.subscribe((val) => console.log(val));
    this.TeatroDBservice.getPrenotazioni$().subscribe({
      next: (res) => {
        this.prenotazioni = JSON.parse(res);
        this.platea = this.prenotazioni.platea;
        this.palco = this.prenotazioni.palco;
        //res è una stringa => trasformo in Json
        console.log(this.prenotazioni);
      },
    });
  }
  mostraPrenotazione($event) {
    this.nome = $event;
  }
  ngOnInit() {}
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

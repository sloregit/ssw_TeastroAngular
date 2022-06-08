import { Component, OnInit } from '@angular/core';
import { PulsanteComponent } from '../pulsante/pulsante.component';
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
  prenotazioni;
  nome;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  constructor(private TeatroDBservice: TeatroDBService) {}
  getTeatro() {
    this.TeatroDBservice.getPrenotazioni$().subscribe({
      next: (res) => {
        //res è una stringa => trasformo in Json
        this.prenotazioni = JSON.parse(res);
        this.platea = this.prenotazioni.platea;
        this.palco = this.prenotazioni.palco;
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

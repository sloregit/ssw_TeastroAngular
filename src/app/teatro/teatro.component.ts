import { Component, OnInit } from '@angular/core';
import { PulsanteComponent } from './pulsante/pulsante.component';
import { TeatroDBService } from '../teatro-db.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  //a = new PulsanteComponent();
  prenotazioni;
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
        console.log(this.prenotazioni);
        this.filePlatea = this.prenotazioni.platea.length;
        this.postiPlatea = this.prenotazioni.platea[0].length;
        this.filePalco = this.prenotazioni.palco.length;
        this.postiPalco = this.prenotazioni.palco[0].length;

        this.platea = this.prenotazioni.platea.map((fila: Array<string>) =>
          fila.map(
            (val: string, posto: number) =>
              new PulsanteComponent(/*val, this.postiPlatea, posto, 'platea'*/)
          )
        ); /*
        this.palco = this.prenotazioni.palco.map((fila: Array<string>) =>
          fila.map(
            (val: string, posto: number) =>
              new PulsanteComponent(val, this.postiPalco, posto, 'palco')
          )
        );*/
      },
    });
  }
  ngOnInit() {}
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati

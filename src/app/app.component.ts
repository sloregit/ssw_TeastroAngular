import { Component, VERSION, Input, Output, EventEmitter } from '@angular/core';
import { AppDBService } from './app-db.service';

export interface sale {}
export interface Prenotazioni {
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
}
export class Teatro {
  prenotazioni;
  platea;
  palco;
  rapido;
  constructor(prenotazioni: string, rapido: boolean) {
    this.prenotazioni = prenotazioni;
    this.platea = this.prenotazioni.platea;
    this.palco = this.prenotazioni.palco;
    this.rapido = rapido;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Consulta la disponibilità';
  sale;
  teatro: Teatro;
  nomePrenotazione: string;
  prenotazioni: string;
  prenotazioniOut: string;
  conferma: string;
  constructor(private AppDBservice: AppDBService) {
    const prenotazioni: object = {
      platea: Array(6)
        .fill('fila')
        .map(() =>
          Array(10)
            .fill('posto')
            .map((val, posto) => {
              return (val = 'x');
            })
        ),
      palco: Array(4)
        .fill('fila')
        .map(() =>
          Array(4)
            .fill('posto')
            .map((val, posto) => {
              return (val = 'x');
            })
        ),
    };
    this.sale = [
      { nomeSpettacolo: 'spettacolo 1', prenotazioni: prenotazioni },
      { nomeSpettacolo: 'spettacolo 2', prenotazioni: prenotazioni },
      { nomeSpettacolo: 'spettacolo 3', prenotazioni: prenotazioni },
    ];
  }

  passaNome($event) {
    this.nomePrenotazione = $event.target.value;
  }
  //@Output in TeatroComponent
  clean(teatro: undefined) {
    this.teatro = teatro;
  }
  //get dati + invio oggetto Teatro a teatroComponent
  mostraTeatro(rapido: boolean) {
    this.AppDBservice.getPrenotazioni$().subscribe({
      next: (res: string) => {
        this.prenotazioni = JSON.parse(res);
        this.teatro = new Teatro(this.prenotazioni, rapido);
        console.log(this.teatro);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  aggiornaPrenotazioni($event: Teatro) {
    this.prenotazioniOut = JSON.stringify($event.prenotazioni);
    this.AppDBservice.SetPrenotazioni$($event.prenotazioni).subscribe({
      next: (val) => (this.conferma = val),
    });
    this.nomePrenotazione = undefined;
  }
  //Per praticità//////////////////da Eliminare
  resetPrenotazioni() {
    const prenotazioni: object = {
      platea: Array(6)
        .fill('fila')
        .map(() =>
          Array(10)
            .fill('posto')
            .map((val, posto) => {
              return (val = 'x');
            })
        ),
      palco: Array(4)
        .fill('fila')
        .map(() =>
          Array(4)
            .fill('posto')
            .map((val, posto) => {
              return (val = 'x');
            })
        ),
    };
    this.AppDBservice.SetPrenotazioni$(JSON.stringify(prenotazioni)).subscribe(
      (val) => (this.conferma = 'Teatro resettato')
    );
  }
  NewresetPrenotazioni() {
    /*this.AppDBservice.SetPrenotazioni$(JSON.stringify(prenotazioni)).subscribe(
      (val) => (this.conferma = 'Teatro resettato')
    );*/
  }
}

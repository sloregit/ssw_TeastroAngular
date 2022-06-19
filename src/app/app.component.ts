import { Component, VERSION, Input, Output, EventEmitter } from '@angular/core';
import { AppDBService } from './app-db.service';

export interface spettacoli {
  nomeSpettacolo;
  prenotazioni;
}

export interface Prenotazioni {
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
}
export class Teatro {
  nomeSpettacolo;
  prenotazioni;
  platea;
  palco;
  rapido;
  constructor(prenotazioni: string, rapido: boolean, nomeSpettacolo) {
    this.prenotazioni = prenotazioni;
    this.platea = this.prenotazioni.platea;
    this.palco = this.prenotazioni.palco;
    this.rapido = rapido;
    this.nomeSpettacolo = nomeSpettacolo;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Consulta la disponibilità';
  sale: Array<spettacoli>;
  teatro: Teatro;
  nomePrenotazione: string;
  prenotazioni: string;
  prenotazioniOut: string;
  conferma: string;
  constructor(private AppDBservice: AppDBService) {
    this.sale = [
      { nomeSpettacolo: 'spettacolo 1', prenotazioni: this.prenotazioni },
      { nomeSpettacolo: 'spettacolo 2', prenotazioni: this.prenotazioni },
      { nomeSpettacolo: 'spettacolo 3', prenotazioni: this.prenotazioni },
    ];
    console.log(this.sale);
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
        this.teatro = new Teatro(this.prenotazioni, rapido, 'spettacolo1');
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
    /*this.sale = [
      { nomeSpettacolo: 'spettacolo 1', teatro: prenotazioni },
      { nomeSpettacolo: 'spettacolo 2', teatro: prenotazioni },
      { nomeSpettacolo: 'spettacolo 3', teatro: prenotazioni },
    ];
    /*this.AppDBservice.SetPrenotazioni$(JSON.stringify(prenotazioni)).subscribe(
      (val) => (this.conferma = 'Teatro resettato')
    );*/
  }
}

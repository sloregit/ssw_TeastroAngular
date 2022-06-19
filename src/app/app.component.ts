import {
  Component,
  VERSION,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { AppDBService } from './app-db.service';

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
  sale: Array<string>;
  teatro: Teatro;
  nomePrenotazione: string;
  prenotazioni: string;
  prenotazioniOut: string;
  conferma: string;
  constructor(private AppDBservice: AppDBService) {
    this.sale = ['spettacolo 1', 'spettacolo 2', 'spettacolo 3'];
  }
  a($event) {
    console.log($event);
  }
  passaNome($event) {
    this.nomePrenotazione = $event.target.value;
  }
  //@Output in TeatroComponent
  clean(teatro: undefined) {
    this.teatro = teatro;
  }
  //get dati + invio oggetto Teatro a teatroComponent
  mostraTeatro(spettacolo: string, rapido: boolean) {
    let index: number;
    switch (spettacolo) {
      case 'spettacolo 1':
        index = 1;
        break;
      case 'spettacolo 2':
        index = 2;
        break;
      case 'spettacolo 3':
        index = 3;
        break;
    }
    console.log(index);
    this.AppDBservice.getPrenotazioni$().subscribe({
      next: (res: string) => {
        this.prenotazioni = JSON.parse(res)[index];
        this.teatro = new Teatro(this.prenotazioni, rapido, spettacolo);
        console.log(this.prenotazioni);
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
    const sale = [
      { nomeSpettacolo: 'spettacolo 1', teatro: prenotazioni },
      { nomeSpettacolo: 'spettacolo 2', teatro: prenotazioni },
      { nomeSpettacolo: 'spettacolo 3', teatro: prenotazioni },
    ];
    console.log(sale);
    this.AppDBservice.SetPrenotazioni$(JSON.stringify(sale)).subscribe(
      (val) => (this.conferma = 'Teatro resettato')
    );
  }
}

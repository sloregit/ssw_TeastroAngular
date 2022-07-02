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
  consulta: boolean;
  sale: Array<string>;
  spettacoloIndex: number = undefined;
  nomeSpettacolo: string;
  teatro: Teatro;
  nomePrenotazione: string;
  prenotazioni: string;
  prenotazioniIn;
  prenotazioniOut: string;
  conferma: string;
  constructor(private AppDBservice: AppDBService) {
    this.sale = ['The Big Lebowsky', 'spettacolo 2', 'spettacolo 3'];
  }

  numeraSpettacolo(nomeSpettacolo) {
    console.log(nomeSpettacolo);
    switch (nomeSpettacolo) {
      case this.sale[0]:
        this.spettacoloIndex = 0;
        break;
      case this.sale[1]:
        this.spettacoloIndex = 1;
        break;
      case this.sale[2]:
        this.spettacoloIndex = 2;
        break;
    }
  }
  //il nome della prenotazione viene dall'input
  passaNome($event) {
    this.nomePrenotazione = $event.target.value;
  }
  //@Output in TeatroComponent
  clean(teatro: undefined) {
    this.teatro = teatro;
    this.spettacoloIndex = undefined;
    this.nomePrenotazione = undefined;
  }
  //get dati + invio oggetto Teatro a teatroComponent
  mostraTeatro(spettacolo: string, rapido: boolean) {
    this.AppDBservice.getPrenotazioni$().subscribe({
      next: (res: string) => {
        this.prenotazioniIn = JSON.parse(res);
        this.prenotazioni = this.prenotazioniIn[this.spettacoloIndex].teatro;
        this.teatro = new Teatro(this.prenotazioni, rapido, spettacolo);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  aggiornaPrenotazioni($event: Teatro) {
    this.prenotazioniIn[this.spettacoloIndex].teatro = $event.prenotazioni;
    for (let spettacolo in this.prenotazioniIn) {
      console.log(spettacolo);
    }
    this.prenotazioniOut = JSON.stringify(this.prenotazioniIn);
    console.log(this.prenotazioniOut);

    this.AppDBservice.SetPrenotazioni$(this.prenotazioniOut).subscribe({
      next: (val) => (this.conferma = val),
    });
    this.nomePrenotazione = undefined;
  }
  //Per praticità//////////////////da Eliminare
  NewresetPrenotazioni() {
    const prenotazioni: object = {
      platea: Array(7)
        .fill('fila')
        .map(() =>
          Array(10)
            .fill('posto')
            .map((val, posto) => {
              return (val = 'pippo');
            })
        ),
      palco: Array(4)
        .fill('fila')
        .map(() =>
          Array(6)
            .fill('posto')
            .map((val, posto) => {
              return (val = undefined);
            })
        ),
    };
    /*const sale = [
      { nomeSpettacolo: 'spettacolo 1', teatro: prenotazioni },
      { nomeSpettacolo: 'spettacolo 2', teatro: prenotazioni },
    ];*/
    // console.log(sale);
    this.AppDBservice.SetPrenotazioni$(JSON.stringify(prenotazioni)).subscribe(
      (val) => (this.conferma = 'Teatro resettato')
    );
  }
}

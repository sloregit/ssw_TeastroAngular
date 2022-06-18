import { Component, VERSION, Input, Output, EventEmitter } from '@angular/core';
import { AppDBService } from './app-db.service';

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
  teatro: Teatro;
  nomePrenotazione: string;
  prenotazioni: string;
  prenotazioniOut: string;
  constructor(private AppDBservice: AppDBService) {}

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
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  aggiornaPrenotazioni($event: Teatro) {
    this.prenotazioniOut = JSON.stringify($event.prenotazioni);
    this.AppDBservice.SetPrenotazioni$($event.prenotazioni).subscribe({
      next: (val) => console.log(val),
    });
  }
  resetPrenotazioni() {
    const prenotazioni: Array<any> = new Array(
      new Array<string>(10),
      new Array<string>(4)
    );
    console.log();
    //let TeatroVuoto = new Teatro();
  }
}
/**
 return this.http.post<string>(
      this.URL + 'set?key=' + this.Key,
      this.prenotazioni
    );
 */

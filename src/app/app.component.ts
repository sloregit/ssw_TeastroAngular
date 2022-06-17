import { Component, VERSION } from '@angular/core';
import { AppDBService } from './app-db.service';

export class Teatro {
  prenotazioni;
  platea;
  palco;
  constructor(prenotazioni: string) {
    this.prenotazioni = prenotazioni;
    this.platea = this.prenotazioni.platea;
    this.palco = this.prenotazioni.palco;
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
  prenotazioni: string;
  constructor(private AppDBservice: AppDBService) {}

  //@Output in TeatroComponent
  clean(teatro: undefined) {
    this.teatro = teatro;
  }
  //get dati + invio a teatroComponent
  mostraTeatro() {
    this.AppDBservice.getPrenotazioni$().subscribe({
      next: (res: string) => {
        this.prenotazioni = JSON.parse(res);
        this.teatro = new Teatro(this.prenotazioni);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}

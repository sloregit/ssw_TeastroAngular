import { Component, VERSION } from '@angular/core';
import { TeatroDBService } from './teatro-db.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datiIn;
  constructor(private TeatroDBservice: TeatroDBService) {}
  getTeatro() {
    this.TeatroDBservice.getPrenotazioni$().subscribe({
      next: (res) => {
        //res è una stringa => trasformo in Json
        this.datiIn = JSON.parse(res);
        //this.platea = this.prenotazioni.platea;
        //this.palco = this.prenotazioni.palco;
      },
    });
  }
}

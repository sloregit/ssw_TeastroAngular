import { Component, VERSION } from '@angular/core';
import { TeatroDBService } from './teatro-db.service';
import { TeatroComponent } from './teatro/teatro.component';
import { Observable, of } from 'rxjs';

export class Teatro {
  prenotazioni;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
  filePlatea: number;
  postiPlatea: number;
  filePalco: number;
  postiPalco: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  teatro: Teatro;
  constructor(private TeatroDBservice: TeatroDBService) {}
  mostraTeatro() {
    this.teatro = new Teatro();
    this.TeatroDBservice.getPrenotazioni$().subscribe({
      next: (res) => {
        this.teatro.prenotazioni = JSON.parse(res);
        //res è una stringa => trasformo in Json
        console.log(this.teatro);
      },
    });
  }
}

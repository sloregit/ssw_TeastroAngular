import { Component, VERSION } from '@angular/core';
import { TeatroDBService } from './teatro-db.service';
import { TeatroComponent } from './teatro/teatro.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Prenota il tuo posto';
  prenotazioni: Observable<string>;
  constructor(private TeatroDBservice: TeatroDBService) {}

  //@Output in TeatroComponent
  clean(prenotazioni: undefined) {
    this.prenotazioni = prenotazioni;
  }
  //get dati + invio a teatroComponent
  mostraTeatro() {
    this.TeatroDBservice.getPrenotazioni$().subscribe({
      next: (res) => {
        this.prenotazioni = of(JSON.parse(res));
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}

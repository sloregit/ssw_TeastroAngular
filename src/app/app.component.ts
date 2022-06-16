import { Component, VERSION } from '@angular/core';
import { AppDBService } from './app-db.service';
import { TeatroComponent } from './teatro/teatro.component';
import { Observable, of, map } from 'rxjs';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Consulta la disponibilità';
  prenotazioni: Observable<string>;
  constructor(private AppDBservice: AppDBService) {}

  //@Output in TeatroComponent
  clean(prenotazioni: undefined) {
    this.prenotazioni = prenotazioni;
  }
  //get dati + invio a teatroComponent
  mostraTeatro() {
    this.AppDBservice.getPrenotazioni$().subscribe({
      next: (res) => {
        this.prenotazioni = of(JSON.parse(res));
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}

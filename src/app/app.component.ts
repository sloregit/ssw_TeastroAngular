import { Component, VERSION } from '@angular/core';
import { TeatroDBService } from './teatro-db.service';
import { TeatroComponent } from './teatro/teatro.component';
import { Observable, of } from 'rxjs';

export class Teatro {
  prenotazioni: Observable<string>;
  platea: Array<Array<string>>;
  palco: Array<Array<string>>;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prenotazioni;
  t = new Teatro();
  constructor(private TeatroDBservice: TeatroDBService) {}
  mostraTeatro() {
    this.TeatroDBservice.getPrenotazioni$().subscribe({
      next: (res) => {
        this.prenotazioni = of(JSON.parse(res));
        this.t.prenotazioni = this.prenotazioni;
        //res è una stringa => trasformo in Json
        console.log('app: ' + this.prenotazioni);
      },
    });
  }
}

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
  teatro;
  constructor(private TeatroDBservice: TeatroDBService) {}
  mostraTeatro() {
    this.teatro = new Teatro();
    this.TeatroDBservice.getPrenotazioni$().subscribe({
      next: (res) => {
        //res è una stringa => trasformo in Json
        this.teatro.prenotazioni = of(JSON.parse(res));
        //console.log(this.teatro);
      },
    });
  }
}

import { Component, VERSION } from '@angular/core';
import { TeatroDBService } from './teatro-db.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 1;
  constructor(private http: TeatroDBService) {
    this.http.getPrenotazioni$.subscribe({});
  }
}

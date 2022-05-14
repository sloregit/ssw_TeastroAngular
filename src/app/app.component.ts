import { Component, VERSION } from '@angular/core';
import { TeatroDBService } from './teatro-db.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: TeatroDBService) {}
  console.log(this)
  this.http.getPrenotazioni$.subscribe({})
}

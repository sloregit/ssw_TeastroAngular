import { Component, OnInit } from '@angular/core';
import { TeatroDBService } from '../teatro-db.service';
@Component({
  selector: 'app-data-request',
  templateUrl: './data-request.component.html',
  styleUrls: ['./data-request.component.css'],
})
export class DataRequestComponent implements OnInit {
  prenotazioni;
  constructor(private http: TeatroDBService) {
    this.http.getPrenotazioni$().subscribe((val) => (this.prenotazioni = val));
  }

  ngOnInit() {}
}

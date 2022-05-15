import { Component, OnInit } from '@angular/core';
import { TeatroDBService } from '../teatro-db.service';

@Component({
  selector: 'app-richiesta-dati',
  templateUrl: './richiesta-dati.component.html',
  styleUrls: ['./richiesta-dati.component.css'],
})
export class RichiestaDatiComponent implements OnInit {
  prenotazioni;
  constructor(private http: TeatroDBService) {
    this.http.getPrenotazioni$().subscribe((val) => (this.prenotazioni = val));
  }

  ngOnInit() {}
}

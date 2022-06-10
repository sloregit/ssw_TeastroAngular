import { Component, OnInit } from '@angular/core';
import { TeatroDBService } from '../teatro-db.service';
@Component({
  selector: 'app-pulsante-get',
  templateUrl: './pulsante-get.component.html',
  styleUrls: ['./pulsante-get.component.css'],
})
export class PulsanteGetComponent implements OnInit {
  prenotazioni;
  constructor(private TeatroDBservice: TeatroDBService) {}
  mostraTeatro() {
    this.TeatroDBservice.getPrenotazioni$().subscribe({
      next: (res) => {
        this.prenotazioni = JSON.parse(res);
        //res è una stringa => trasformo in Json
        console.log(this.prenotazioni);
      },
    });
  }
  ngOnInit() {}
}

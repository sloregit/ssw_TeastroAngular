import { Component, OnInit } from '@angular/core';
import { PulsanteComponent } from './pulsante/pulsante.component';
import { TeatroDBService } from '../teatro-db.service';
@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  a = new PulsanteComponent();
  prenotazioni;
  constructor(private TeatroDBservice: TeatroDBService) {
    this.prenotazioni = TeatroDBservice.getPrenotazioni$().subscribe;
    console.log(this.prenotazioni);
  }

  ngOnInit() {}
}

///sottoscrizione ai dati fatta
///creare array di pulsanti e mapparli coi dati
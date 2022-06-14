import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
})
export class InserimentoComponent implements OnInit {
  passaNome($event) {
    console.log($event.target.value);
  }
  constructor() {}

  ngOnInit() {}
}

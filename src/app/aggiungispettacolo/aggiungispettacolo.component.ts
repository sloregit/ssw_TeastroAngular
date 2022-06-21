import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggiungispettacolo',
  templateUrl: './aggiungispettacolo.component.html',
  styleUrls: ['./aggiungispettacolo.component.css'],
})
export class AggiungispettacoloComponent implements OnInit {
  nomeSpettacolo;
  constructor() {}
  aggiungiSpettacolo() {}
  passaNomeSpettacolo($event) {
    this.nomeSpettacolo = $event.target.value;
  }
  ngOnInit() {}
}

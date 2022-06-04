import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  pulsante;
  etichetta: string;
  value: string;
  mostraNome() {
    try {
    } catch (e: any) {
      console.error('errore in: Pulsante.mostraNome', e.message, e.name);
    }
  }
  constructor() {
    try {
      this.pulsante = document.createElement('button');
      this.etichetta = 'P';
      this.pulsante.addEventListener('click', this.mostraNome);
    } catch (e: any) {
      console.error('errore in: Pulsante(constructor)', e.message, e.name);
    }
  }
  ngOnInit() {}
}

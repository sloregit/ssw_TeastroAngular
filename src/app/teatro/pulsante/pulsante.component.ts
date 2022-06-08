import { Component, Injectable, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  pulsante;
  @Input() etichetta: string;
  value: string;
  aCapo: HTMLElement;
  nomi_par = document.getElementById('nomi_par');
  platea_div = document.getElementById('platea_div');
  palco_div = document.getElementById('palco_div');
  mostraNome() {
    try {
      /*
      if (this) {
        //se il posto è libero
        if (this.value == 'x') {
          Postolibero = true;
        } else if (this.value != 'x') {
          Postolibero = false;
          parNomi.innerHTML = 'Il posto è gia prenotato';
          //alert('il posto è già prenotato');
        }*/
      this.nomi_par.innerHTML = this.value;
    } catch (e: any) {
      console.error('errore in: Pulsante.mostraNome', e.message, e.name);
    }
  }
  constructor(/*nome: string, LFila: number, posto: number, zona: string*/) {
    try {
      // posto + 1 >= LFila ? this.platea_div.appendChild(this.aCapo) : '';
      /*
      if (zona === 'platea') {
        this.platea_div.appendChild(this.pulsante);
        posto + 1 >= LFila ? this.platea_div.appendChild(this.aCapo) : '';
      }
      if (zona === 'palco') {
        this.palco_div.appendChild(this.pulsante);
        posto + 1 >= LFila ? this.palco_div.appendChild(this.aCapo) : '';
      }*/
      // this.pulsante.value = nome != undefined ? nome : 'x';
      //this.pulsante.className = nome != 'x' ? 'prenotato' : 'libero';
    } catch (e: any) {
      console.error('errore in: Pulsante(constructor)', e.message, e.name);
    }
  }
  ngOnInit() {}
}

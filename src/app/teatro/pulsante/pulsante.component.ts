import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  pulsante;
  etichetta: Node;
  value: string;
  aCapo: HTMLElement;
  parent: HTMLElement = document.getElementById('pulsante');
  mostraNome() {
    try {
      //@Output val = this.value;
      /*
      if (Selezionato(this)) {
        //se il posto è libero
        if (this.value == 'x') {
          Postolibero = true;
        } else if (this.value != 'x') {
          Postolibero = false;
          parNomi.innerHTML = 'Il posto è gia prenotato';
          //alert('il posto è già prenotato');
        }
        parNomi.innerHTML = this.value;}
        */
    } catch (e: any) {
      console.error('errore in: Pulsante.mostraNome', e.message, e.name);
    }
  }
  constructor() {
    try {
      this.pulsante = document.createElement('button');
      this.etichetta = document.createTextNode('P');
      this.etichetta.textContent = 'P'; //+ (posto + 1);
      this.pulsante.appendChild(this.etichetta);
      this.aCapo = document.createElement('br');
      this.parent.appendChild(this.pulsante);
      //posto + 1 >= LFila ? parent.appendChild(this.aCapo) : '';
      //this.pulsante.value = nome != undefined ? nome : 'x';
      //this.pulsante.className = nome != 'x' ? 'prenotato' : 'libero';
      this.pulsante.addEventListener('click', this.mostraNome);
    } catch (e: any) {
      console.error('errore in: Pulsante(constructor)', e.message, e.name);
    }
  }
  ngOnInit() {}
}

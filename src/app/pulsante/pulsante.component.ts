import {
  Component,
  Injectable,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css'],
})
export class PulsanteComponent implements OnInit {
  @Input() etichetta: string;
  @Input() nome: string;
  selezionato: boolean;
  @Output() mostraNome = new EventEmitter<string>();
  mostraNomeE() {
    try {
      this.mostraNome.emit(this.nome);
    } catch (e: any) {
      console.error('errore in: Pulsante.mostraNome', e.message, e.name);
    }
  }

  constructor() {
    try {
    } catch (e: any) {
      console.error('errore in: Pulsante(constructor)', e.message, e.name);
    }
  }
  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { PulsanteComponent } from './pulsante/pulsante.component';
@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent implements OnInit {
  a = new PulsanteComponent;
  constructor() {}

  ngOnInit() {}
}

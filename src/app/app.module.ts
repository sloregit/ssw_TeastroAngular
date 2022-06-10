import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TeatroDBService } from './teatro-db.service';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { TeatroComponent } from './teatro/teatro.component';
import { PulsanteComponent } from './pulsante/pulsante.component';
import { PulsanteGetComponent } from './pulsante-get/pulsante-get.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    InserimentoComponent,
    PulsanteComponent,
    TeatroComponent,
    PulsanteGetComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TeatroDBService],
})
export class AppModule {}

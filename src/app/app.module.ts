import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TeatroDBService } from './teatro-db.service';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { TeatroComponent } from './teatro/teatro.component';
import { PulsanteComponent } from './pulsante/pulsante.component';
import { ZonaComponent } from './zona/zona.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    InserimentoComponent,
    PulsanteComponent,
    TeatroComponent,
    ZonaComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TeatroDBService],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppDBService } from './app-db.service';
import { TeatroComponent } from './teatro/teatro.component';
import { PulsanteComponent } from './pulsante/pulsante.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, PulsanteComponent, TeatroComponent],
  bootstrap: [AppComponent],
  providers: [AppDBService],
})
export class AppModule {}

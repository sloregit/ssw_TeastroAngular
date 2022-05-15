import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TeatroDBService } from './teatro-db.service';
import { LoginComponent } from './login/login.component';
import { PulsanteComponent } from './pulsante/pulsante.component';
import { TeatroComponent } from './teatro/teatro.component';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    LoginComponent,
    PulsanteComponent,
    TeatroComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TeatroDBService],
})
export class AppModule {}

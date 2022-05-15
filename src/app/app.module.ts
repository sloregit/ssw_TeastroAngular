import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TeatroDBService } from './teatro-db.service';
import { DataRequestComponent } from './data-request/data-request.component';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, DataRequestComponent],
  bootstrap: [AppComponent],
  providers: [TeatroDBService],
})
export class AppModule {}

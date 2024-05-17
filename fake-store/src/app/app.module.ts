import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltraPipe } from './pipes/filtra.pipe';
import { Fonte2Directive } from './diretivas/fonte2.directive';

@NgModule({
  declarations: [
    AppComponent,
    FiltraPipe,
    Fonte2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

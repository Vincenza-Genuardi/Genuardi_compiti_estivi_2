import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestioneStrumentoComponent } from './gestione-strumento/gestione-strumento.component';
import { GestioneSpartitoComponent } from './gestione-spartito/gestione-spartito.component';
import { HttpClientModule } from '@angular/common/http';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneStrumentoComponent,
    GestioneSpartitoComponent,
    BenvenutoComponent,
   
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

import { Component } from '@angular/core';
import { SpartitiStrumenti } from './models/SpartitiStrumenti.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Strumento } from './models/strumento.model';
import { Spartito } from './models/spartito.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data !: SpartitiStrumenti;
  URL:string='https://my-json-server.typicode.com/Vincenza-Genuardi/StrumentiESpartiti/db';
  OStreaming!: Observable<SpartitiStrumenti>;

  constructor(public http: HttpClient) {
    this.makeTypedRequest()
    
  }
  makeTypedRequest():void{
    this.OStreaming = this.http.get<SpartitiStrumenti>(this.URL);
    this.OStreaming.subscribe( d => {this.data = d; this.ordinamento();});
   
  }
  ordinamento():boolean{
    this.data.spartiti.sort((a: Spartito, b: Spartito) => a.prezzo-b.prezzo );
    this.data.strumenti.sort((a: Strumento, b: Strumento) => a.prezzo-b.prezzo );
    return false;
  }
  
}

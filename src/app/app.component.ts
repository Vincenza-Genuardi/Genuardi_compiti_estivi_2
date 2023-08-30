import { Component } from '@angular/core';
import { SpartitiStrumenti } from './models/SpartitiStrumenti.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data !: SpartitiStrumenti
  URL:string='https://my-json-server.typicode.com/Vincenza-Genuardi/StrumentiESpartiti/db'
  OStreaming!: Observable<SpartitiStrumenti>
   
  constructor(public http: HttpClient) {
    this.makeTypedRequest()
  
  }
  makeTypedRequest():void{
    this.OStreaming = this.http.get<SpartitiStrumenti>(this.URL);
    this.OStreaming.subscribe( d => {this.data = d;});
  }
}

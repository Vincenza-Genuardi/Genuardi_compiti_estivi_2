import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Strumento } from '../models/strumento.model';

@Component({
  selector: 'app-gestione-strumento',
  templateUrl: './gestione-strumento.component.html',
  styleUrls: ['./gestione-strumento.component.css']
})
export class GestioneStrumentoComponent {
  strumenti:Strumento[];
  constructor(private router:Router) {
    this.strumenti = this.router.getCurrentNavigation().extras.state as Strumento[];
  }
}

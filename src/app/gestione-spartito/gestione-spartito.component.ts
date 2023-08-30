import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Spartito } from '../models/spartito.model';

@Component({
  selector: 'app-gestione-spartito',
  templateUrl: './gestione-spartito.component.html',
  styleUrls: ['./gestione-spartito.component.css']
})
export class GestioneSpartitoComponent {
  spartiti:Spartito[];
  constructor(private router:Router) {
    this.spartiti = this.router.getCurrentNavigation().extras.state as Spartito[];
  }
}

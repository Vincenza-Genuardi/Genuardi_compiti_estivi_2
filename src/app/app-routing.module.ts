import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestioneSpartitoComponent } from './gestione-spartito/gestione-spartito.component';
import { GestioneStrumentoComponent } from './gestione-strumento/gestione-strumento.component';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';

const routes: Routes = [
  { path: '', redirectTo: '/benvenuto', pathMatch: 'full' },
  { path: 'spartiti', component:GestioneSpartitoComponent}, 
  { path: 'strumenti', component:GestioneStrumentoComponent}, 
  { path: 'benvenuto', component:BenvenutoComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

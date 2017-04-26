import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ResponsiveComponent } from './responsive/responsive.component';

const routes: Routes = [
  {
    path: 'responsive', component: ResponsiveComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'responsive'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

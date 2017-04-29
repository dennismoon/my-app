import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ResponsiveComponent } from './responsive/responsive.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';

const routes: Routes = [
  {
    path: 'responsive', component: ResponsiveComponent
  },
  {
    path: 'create-pdf', component: CreatePdfComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'create-pdf'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

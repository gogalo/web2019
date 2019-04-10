import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PageNotFoundComponent } from '../public/page-notfound/page-notfound';

const routes: Routes = [
];

@NgModule({
  declarations: [
    //PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GestionModule } from './gestion/gestion.module';
import { PublicModule } from './public/public.module';
import {AngularImportsModule} from './angular-imports/angular-imports.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from './shared/cabecera/cabecera.component';
import { PieComponent } from './shared/pie/pie.component';


const routes: Routes = [,
 { path: ''
, redirectTo: '/home', pathMatch: 'full' }, 
]; 


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AngularImportsModule,
	BrowserAnimationsModule,
	PublicModule,
	GestionModule,
	RouterModule.forRoot(routes) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

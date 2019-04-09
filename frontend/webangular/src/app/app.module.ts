import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AngularImportsModule} from './angular-imports/angular-imports.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [{ path: 'usuarios', component: UsuariosComponent },
 { path: 'home', component: HomeComponent },
 { path: 'request', component: RequestComponent },
 { path: ''
, redirectTo: '/home', pathMatch: 'full' }, 
]; 
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PublicacionesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AngularImportsModule,
	BrowserAnimationsModule,
	RouterModule.forRoot(
 	appRoutes,
 { enableTracing: true } // <-- debugging purposes only
 ) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

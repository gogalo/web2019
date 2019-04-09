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
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [{ path: 'usuarios', component: UsuariosComponent },
 { path: 'home', component: HomeComponent },
 { path: 'logout', component: LogoutComponent },
 { path: 'request', component: RequestComponent },
 { path: 'registro', component: RegistroComponent },
 { path: 'login', component: LoginComponent },
 { path: ''
, redirectTo: '/home', pathMatch: 'full' }, 
]; 
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PublicacionesComponent,
    HomeComponent,
    RequestComponent,
    LoginComponent,
    RegistroComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AngularImportsModule,
	BrowserAnimationsModule,
	RouterModule.forRoot(
 	routes,
 // { enableTracing: true } // <-- debugging purposes only
 ) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

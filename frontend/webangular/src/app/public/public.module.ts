import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularImportsModule } from '../angular-imports/angular-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// componentes
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

// modelos


// servicios

// rutas
import { PUBLIC_RUTAS } from './public.routes';
const publicRoutes: Routes = [
  { path: '', children:  PUBLIC_RUTAS}
];

@NgModule({
  declarations: [
    PublicacionesComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    LogoutComponent,
    PageNotfoundComponent
	],
  imports: [
    CommonModule,
	  AngularImportsModule,
	  BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(publicRoutes)
  ],
   exports: [
     RouterModule,
	   PublicacionesComponent,
     HomeComponent,
     LoginComponent,
     RegistroComponent,
     LogoutComponent,
  ]
})

export class PublicModule { }

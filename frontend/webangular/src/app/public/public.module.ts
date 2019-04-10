import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

const publicRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'logout',  component: LogoutComponent },
  { path: 'registro',  component: RegistroComponent },
  { path: 'publicaciones', component: PublicacionesComponent }
];

@NgModule({
  declarations: [ 
  PublicacionesComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    LogoutComponent,
	],
  imports: [
    CommonModule,
   
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

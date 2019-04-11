import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import {AngularImportsModule} from '../angular-imports/angular-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const publicRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'logout',  component: LogoutComponent },
  { path: 'registro',  component: RegistroComponent },
  { path: 'publicaciones', component: PublicacionesComponent },
    { path: '**', component: PageNotfoundComponent }
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

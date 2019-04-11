import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {GESTION_RUTAS} from './gestion.routes';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PostsComponent } from './posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularImportsModule} from '../angular-imports/angular-imports.module';
const gestionRoutes: Routes = [
  { path: 'gestion', children:  GESTION_RUTAS}
];

@NgModule({
  declarations: [
  PostsComponent,
  UsuariosComponent
],
  imports: [
    CommonModule,
	 AngularImportsModule,
	  BrowserAnimationsModule,
    RouterModule.forChild(gestionRoutes)
  ],
   exports: [
    RouterModule,
    PostsComponent,
    UsuariosComponent
  ]
})

export class GestionModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {GESTION_RUTAS} from './gestion.routes';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PostsComponent } from './posts/posts.component';
import { AngularImportsModule } from '../angular-imports/angular-imports.module';
import {FormsModule} from '@angular/forms';

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
    FormsModule,
    AngularImportsModule,
    RouterModule.forChild(gestionRoutes)
  ],
   exports: [
    RouterModule,
    PostsComponent,
    UsuariosComponent
  ]
})

export class GestionModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {GESTION_RUTAS} from './gestion.routes';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PostsComponent } from './posts/posts.component';

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
    RouterModule.forChild(gestionRoutes)
  ],
   exports: [
    RouterModule,
    PostsComponent,
    UsuariosComponent
  ]
})

export class GestionModule { }

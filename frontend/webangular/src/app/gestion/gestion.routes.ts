
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PostsComponent } from './posts/posts.component';

export const GESTION_RUTAS=[
  { path: '', component: UsuariosComponent },
  { path: 'posts',  component: PostsComponent },
  { path: 'users', component: UsuariosComponent }
];

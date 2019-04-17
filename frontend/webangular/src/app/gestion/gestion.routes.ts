import { UsuariosComponent } from './usuarios/usuarios.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const GESTION_RUTAS=[
  { path: '', component: DashboardComponent, name: 'gestionDashboard'},
  { path: 'posts',  component: PostsComponent , name: 'gestionPosts'},
  { path: 'users', component: UsuariosComponent, name: 'gestionUsuarios'}
];

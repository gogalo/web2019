import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

export const PUBLIC_RUTAS=[
  { path: '',  component: HomeComponent, name: 'publicHome' },
  { path: 'login',  component: LoginComponent, name: 'publicLogin' },
  { path: 'logout',  component: LogoutComponent, name: 'publicLogout' },
  { path: 'registro',  component: RegistroComponent, name: 'publicRegistro' },
  { path: 'publicaciones', component: PublicacionesComponent, name: 'publicPublicaciones' },
  { path: '**', component: PageNotfoundComponent, name: 'publicPageNotFound' }
];

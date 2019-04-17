import { Injectable } from '@angular/core';
import { PUBLIC_RUTAS } from '../public/public.routes';
import { GESTION_RUTAS } from '../gestion/gestion.routes';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() {}

  getRoutesNamedData() {
    //console.log(routes);
    let namedRoutes = new Array();

    PUBLIC_RUTAS.forEach(item => {
      namedRoutes[item.name] = `/${item.path}`;
    });

    GESTION_RUTAS.forEach(item => {
      namedRoutes[item.name] = `/gestion/${item.path}`;
    });

    return namedRoutes;

  }

}

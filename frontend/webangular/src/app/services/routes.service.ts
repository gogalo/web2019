import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() {}

  getRoutesNamedData(routes) {

    //console.log(routes);
    let namedRoutes = [];

    routes.forEach((eachRoute) => {
      namedRoutes[eachRoute.name] = eachRoute.path;
    });

    return namedRoutes;

  }
}

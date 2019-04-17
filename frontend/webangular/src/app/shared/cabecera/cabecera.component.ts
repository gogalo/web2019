import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  //public publicRoutes: any[];
  //public gestionRoutes: any[];
  public routesNamed: any[];

  constructor(private routesService: RoutesService) {
    //this.publicRoutes = this.routesService.getRoutesNamedData(PUBLIC_RUTAS);
    //this.gestionRoutes = this.routesService.getRoutesNamedData(GESTION_RUTAS);

    //this.routesNamed = [];
    this.routesNamed = this.routesService.getRoutesNamedData();
    console.log(this.routesNamed);
  }

  ngOnInit() {}

}

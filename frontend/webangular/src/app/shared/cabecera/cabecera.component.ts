import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../services/routes.service';
import { PUBLIC_RUTAS } from '../../public/public.routes';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public routesNamed: any;

  constructor(private routesService: RoutesService) {
    this.routesNamed = routesService.getRoutesNamedData(PUBLIC_RUTAS);
  }

  ngOnInit() {}

}

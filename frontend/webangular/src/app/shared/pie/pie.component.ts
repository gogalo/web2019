import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public routesNamed: any[];

  constructor(private routesService: RoutesService) {
    this.routesNamed = routesService.getRoutesNamedData();
  }

  ngOnInit() {}

}

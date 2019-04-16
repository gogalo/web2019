import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;

  constructor(private dialog: MatDialog) {
    this.title = 'proyecto curso';
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    //TODO: crear el componente para el dialog
    //this.dialog.open(CourseDialogComponent, dialogConfig);
  }


}

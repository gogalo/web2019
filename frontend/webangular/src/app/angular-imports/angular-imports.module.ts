import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
	     CommonModule,
       MatButtonModule,
       MatMenuModule,
       MatIconModule,
       MatCardModule,
       MatSidenavModule,
       MatFormFieldModule,
       MatInputModule,
       MatTooltipModule,
       MatToolbarModule,
       MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
        MatDialogModule
    ]
})
export class AngularImportsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GestionModule } from './gestion/gestion.module';
import { PublicModule } from './public/public.module';
import {AngularImportsModule} from './angular-imports/angular-imports.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './shared/cabecera/cabecera.component';
import { PieComponent } from './shared/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AngularImportsModule,
	BrowserAnimationsModule,
    GestionModule,
    PublicModule,
    AppRoutingModule
  ],
  exports:[
  	AppComponent,
    CabeceraComponent,
    PieComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

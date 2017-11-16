import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {MaterializeModule} from "angular2-materialize";
import {PerfilComponent} from './perfil/perfil.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ListColaboradoresComponent } from './list-colaboradores/list-colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ListColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Imports Angular
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import {MaterializeModule} from "angular2-materialize";
import {PerfilComponent} from './perfil/perfil.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {ListColaboradoresComponent} from './list-colaboradores/list-colaboradores.component';
/**
 * Imports para: Google Maps (AGM)
 * AIzaSyDY2jvvjH4vZ-yDxnRJYyDzpWqa_0QtQXU
 * Url Plugin: https://angular-maps.com/guides/getting-started/
 */
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ListColaboradoresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({  // Google Maps (AGM)
        apiKey: 'AIzaSyDY2jvvjH4vZ-yDxnRJYyDzpWqa_0QtQXU'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

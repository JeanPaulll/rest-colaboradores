import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public idPerfil: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      /*** @description Get ID perfil */
      // this.activatedRoute.params.subscribe(params => {
      //     console.log('params perfil',params);
      //     this.idPerfil = +params["id"];
      //     // AppComponent.setIdPerfilEventEmitter.emit(this.idPerfil);
      // });
       this.activatedRoute.params.subscribe(params => {
          console.log('params', params);
          const id = +params['id'];
          if(Object.keys(params).length == 0) return;
          AppComponent.setIdPerfilEventEmitter.emit(id);
          // AppComponent.setIdPerfilEventEmitter.emit(id);
      });



  }

}

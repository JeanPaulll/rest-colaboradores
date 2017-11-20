import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../app.component";

@Component( {
    selector: 'app-perfil', templateUrl: './perfil.component.html', styleUrls: ['./perfil.component.css']
} )
export class PerfilComponent implements OnInit {

    public idPerfil: any;
    lat: number = -15.7964419;
    lng: number = -47.8855595;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    public colaboradores = [{nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"}];
    public habilidades = ['UX','HTML5','CSS', 'WEB DESIGN', 'PHP','JAVA', 'ANGULARJS','jQuery'];

    ngOnInit() {
        /*** @description Get ID perfil */
        this.activatedRoute.params.subscribe( params => {
            const id = +params['id'];
            this.idPerfil = id;
            if (Object.keys( params ).length == 0) return;
            setTimeout(()=> {
                AppComponent.setIdPerfilEventEmitter.emit( id );
            });
        });
        setTimeout(()=> {
            AppComponent.setIdPerfilEventEmitter.emit('login_false');
        });


    }

}

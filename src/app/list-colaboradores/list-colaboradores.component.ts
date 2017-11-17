import {AfterViewInit, Component, OnInit} from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
import {ActivatedRoute, Router} from "@angular/router";

declare const $: any;

@Component({
  selector: 'app-list-colaboradores',
  templateUrl: './list-colaboradores.component.html',
  styleUrls: ['./list-colaboradores.component.css']
})
export class ListColaboradoresComponent implements OnInit, AfterViewInit {

    /**
     * @description Lista de colaboradores, 15 itens por página
     * @type {[{nome: string; cargo: string; empresa: string}]}
     */
    public colaboradores = [
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},
        {nome: "Jean Paul", cargo: "Desenvolvedor Java", empresa: "Escritório de Inovações"},

    ];

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    }

    public ngAfterViewInit(): void {
        /*** Init Plugin WOW */
        new WOW().init();
    }

    /**
     * @description Realiza animação no card e realiza o rediretion
     * @param idPerfil
     */
    public setAnimation(idPerfil): void {
        let element = $('#card-colaborador-'+idPerfil);
        const self = this;
        element.removeClass("wow flipInX",()=>{
            $(this).remove();
        });
        element.removeClass("wow bounceOut",()=>{
            $(this).remove();
        });
        setTimeout( ()=>{
            element.addClass('wow bounceOut',);
            setTimeout(()=> {
                self.router.navigate(['/perfil', idPerfil]);
            }, 800);
        });
    }

    ngOnInit() { }
}

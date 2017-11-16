import {AfterViewInit, Component, OnInit} from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  public pesquisar: boolean;

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

    constructor() {
        this.pesquisar = false;
    }

    public ngAfterViewInit(){
        new WOW().init();
        $(document).on('click','body *',()=>{
            if($(".label-pesquisa").hasClass("active")){
                this.pesquisar = true;
            }else{
                this.pesquisar = false;
            }
        });
    }

    public anima(idCard){
        let element = $('#card-colaborador-'+idCard);
        element.removeClass("wow flipInX",()=>{
            $(this).remove();
        });
        element.removeClass("wow bounceOut",()=>{
            $(this).remove();
        });
        window.setTimeout( ()=>{
            element.addClass('wow bounceOut');
        });
    }

    ngOnInit() { }

}

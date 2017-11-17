import {AfterViewInit, Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

    public pesquisar:boolean;
    public idPerfilRoute: number;
    static setIdPerfilEventEmitter: EventEmitter<any> = new EventEmitter();
    constructor(private route: ActivatedRoute) {
        this.pesquisar = false;
        this.idPerfilRoute = 1;
    }

    public ngAfterViewInit(){
        $(document).on('click','body *',()=>{
            if($(".label-pesquisa").hasClass("active")){
                this.pesquisar = true;
            }else{
                this.pesquisar = false;
            }
        });
    }

    ngOnInit() {
        const self = this;
        AppComponent.setIdPerfilEventEmitter.subscribe(r=>{
            if(!r) return;
            self.idPerfilRoute = r;
        });

       //  this.route.params.subscribe(params => {
       //      console.log('params', params);
       //      const id = +params['id'];
       //      if(Object.keys(params).length == 0) return;
       //      AppComponent.setIdPerfilEventEmitter.emit(id);
       //      // AppComponent.setIdPerfilEventEmitter.emit(id);
       // });
    }

}

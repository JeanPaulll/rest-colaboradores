import {AfterViewInit, Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute,  Router} from "@angular/router";

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

    public _loginActive: boolean = false;
    public pesquisar:boolean;
    public idPerfilRoute: number;
    static setIdPerfilEventEmitter: EventEmitter<any> = new EventEmitter();
    constructor(private route: ActivatedRoute, private activatedRoute: Router) {
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
            if(r == 'login'){
                self._loginActive = true;
            }else if(r== 'login_false'){
                self._loginActive = false;
            }else{
                self.idPerfilRoute = r;
            }
        });
    }

}

import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
    constructor() {
    }

    public ngAfterViewInit(){}

    ngOnInit() { }

}

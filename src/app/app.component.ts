import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  public colaboradores = ['a','b','c','d','e','f','a','b','c','d','e','f'];

    // private animator: AnimationBuilder;
    //
    // constructor(animationService: AnimationService, private elementRef: ElementRef) {
    //     this.animator = animationService.builder();
    // }

    ngOnInit() {

        let wow = new WOW(
            {
                animateClass: 'animated',
                offset:       100,
                callback:     function(box) {
                    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                }
            }
        );
        wow.init();
        document.getElementById('moar').onclick = function() {
            var section = document.createElement('section');
            section.className = 'section--purple wow fadeInDown';
            this.parentNode.insertBefore(section, this);
        };


     //   this.animator.setType('fadeInUp').show(this.elementRef.nativeElement);
    }

}

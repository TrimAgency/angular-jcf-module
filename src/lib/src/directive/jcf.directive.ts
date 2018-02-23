import { Directive, ElementRef, OnInit, OnDestroy, HostListener } from '@angular/core';
const jcf = require('jcf');

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[jcf]'
})
export class JcfDirective implements OnInit, OnDestroy{

  constructor( private element: ElementRef ){}

  ngOnInit() {
    jcf.setOptions('Select', {
       wrapNative: false,
       wrapNativeOnMobile: false
    });

    jcf.replace(this.element.nativeElement);
  }

  @HostListener('change', ['$event'])
  onChange(event: Event) {
     jcf.refresh(this.element.nativeElement);
  }

  ngOnDestroy() {
    jcf.destroy(this.element.nativeElement);
  }
}

import { Directive, ElementRef, OnInit, OnDestroy, HostListener } from '@angular/core';
import * as jQuery from 'jquery';
import * as jcf from 'jcf';

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
     console.log(event);
     jcf.refresh(this.element.nativeElement);
  }

  ngOnDestroy() {
    jcf.destroy(this.element.nativeElement);
  }
}

import { ElementRef, OnInit, OnDestroy } from '@angular/core';
export declare class JcfDirective implements OnInit, OnDestroy {
    private element;
    constructor(element: ElementRef);
    ngOnInit(): void;
    onChange(event: Event): void;
    ngOnDestroy(): void;
}

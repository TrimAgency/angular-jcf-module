import { Directive, ElementRef, HostListener } from '@angular/core';
import * as jcf from 'jcf';
export class JcfDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        jcf.setOptions('Select', {
            wrapNative: false,
            wrapNativeOnMobile: false
        });
        jcf.replace(this.element.nativeElement);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        jcf.refresh(this.element.nativeElement);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        jcf.destroy(this.element.nativeElement);
    }
}
JcfDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[jcf]'
            },] },
];
/**
 * @nocollapse
 */
JcfDirective.ctorParameters = () => [
    { type: ElementRef, },
];
JcfDirective.propDecorators = {
    'onChange': [{ type: HostListener, args: ['change', ['$event'],] },],
};
function JcfDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    JcfDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    JcfDirective.ctorParameters;
    /** @type {?} */
    JcfDirective.propDecorators;
    /** @type {?} */
    JcfDirective.prototype.element;
}
//# sourceMappingURL=jcf.directive.js.map
import { Directive, ElementRef, HostListener } from '@angular/core';
import * as jcf from 'jcf';
var JcfDirective = (function () {
    /**
     * @param {?} element
     */
    function JcfDirective(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    JcfDirective.prototype.ngOnInit = function () {
        jcf.setOptions('Select', {
            wrapNative: false,
            wrapNativeOnMobile: false
        });
        jcf.replace(this.element.nativeElement);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    JcfDirective.prototype.onChange = function (event) {
        jcf.refresh(this.element.nativeElement);
    };
    /**
     * @return {?}
     */
    JcfDirective.prototype.ngOnDestroy = function () {
        jcf.destroy(this.element.nativeElement);
    };
    return JcfDirective;
}());
export { JcfDirective };
JcfDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[jcf]'
            },] },
];
/**
 * @nocollapse
 */
JcfDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
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
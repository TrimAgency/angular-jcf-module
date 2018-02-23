import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JcfDirective } from './directive/jcf.directive';
var JcfModule = (function () {
    function JcfModule() {
    }
    return JcfModule;
}());
export { JcfModule };
JcfModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    JcfDirective
                ],
                declarations: [
                    JcfDirective
                ],
                providers: [],
            },] },
];
/**
 * @nocollapse
 */
JcfModule.ctorParameters = function () { return []; };
function JcfModule_tsickle_Closure_declarations() {
    /** @type {?} */
    JcfModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    JcfModule.ctorParameters;
}
//# sourceMappingURL=module.js.map
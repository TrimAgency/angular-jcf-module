import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JcfDirective } from './directive/jcf.directive';
export class JcfModule {
}
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
JcfModule.ctorParameters = () => [];
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
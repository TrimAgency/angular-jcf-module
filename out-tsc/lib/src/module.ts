import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JcfDirective } from './directive/jcf.directive';

@NgModule({
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
})
export class JcfModule { }

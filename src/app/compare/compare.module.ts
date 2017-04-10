import { NgModule } from '@angular/core';

import { routing } from './compare.routing';
import { SharedModule } from '../shared/shared.module';
import { ComparePage }   from './compare.page';

@NgModule({
    imports: [
        SharedModule,
        routing,
    ],
    declarations: [
        ComparePage,
    ],
})

export class CompareModule {}

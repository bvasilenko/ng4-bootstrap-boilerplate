import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { HttpService } from './http.service';
import { UnsubscriberFactory } from './unsubscriber.service';
import { StateModule } from './state/state.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DropdownModule.forRoot(),

        StateModule,
    ],
    providers: [
        HttpService,
        UnsubscriberFactory,
    ],
    exports: [
        CommonModule,
        FormsModule,
        DropdownModule,
    ],
})
export class SharedModule { }

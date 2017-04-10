import { StoreFactory } from './store-factory';
import { NgModule } from '@angular/core';

@NgModule({
    providers: [
        StoreFactory,
    ],
})
export class StateModule { }

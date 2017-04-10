import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { SharedModule } from './shared/shared.module';
import { StoresModule } from './stores/stores.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        SharedModule,
        StoresModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

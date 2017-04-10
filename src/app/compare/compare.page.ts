import { Component, OnInit, OnDestroy } from "@angular/core";
import { Http } from '@angular/http';
import { Subscription, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Status, Unsubscriber, UnsubscriberFactory } from '../shared';
import { ObjectMap } from '../shared/util';

@Component({
    selector: 'compare',
    templateUrl: 'compare.page.html',
    host: {
        '[class.compare-page]': 'true',
    }
})

export class ComparePage implements OnInit, OnDestroy {
  
    private _unsubscriber: Unsubscriber;
    
    constructor(
        private _unsubscriberService: UnsubscriberFactory,
    ) {
        this._unsubscriber = this._unsubscriberService.new();
    }

    ngOnInit() {
        
    }
   
    ngOnDestroy() {
        this._unsubscriber.unsubscribeAll();
    }

}
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class UnsubscriberFactory {
    
    public new() {
        return new Unsubscriber();
    }

}

export class Unsubscriber {
    private _subscriptions = new Array<Subscription>();

    public add(...subscriptions: Subscription[]) {
        subscriptions.forEach(subscription => 
            this._subscriptions.push(subscription));
    }

    public unsubscribeAll() {
        this._subscriptions.forEach(s => s.unsubscribe());
    }
}
import {Injectable} from '@angular/core';
import {Store} from './store';

@Injectable()
export class StoreFactory<TState> {

    public new(initialState: TState) {
        return new Store<TState>(initialState);
    }

}
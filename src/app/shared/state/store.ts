import { BehaviorSubject } from 'rxjs';

export class Store<TState> {

    private _currentState: TState;
    private _stateSubject: BehaviorSubject<TState>;

    public constructor(initialState: TState) {
        this._currentState = initialState;
        this._stateSubject = new BehaviorSubject<TState>(this._currentState);
    }

    public get snapshot() {
        return this._currentState;
    }

    public get state() {
        return this._stateSubject;
    }

    public nextState(mutator?: (state: TState) => void, replaceCurrentState = false) {
        if (mutator instanceof Function) {
            this._currentState = mutator(this._currentState) || this._currentState;
        }

        if (!replaceCurrentState) {
            this._stateSubject.next(this._currentState);
        }
    }

}
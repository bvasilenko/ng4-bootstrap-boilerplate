import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription, Observable, Observer } from 'rxjs';

import { HttpService, map2array, Status, Store, StoreFactory } from '../shared';

export interface File {
    url: string; // calculated
    text: string;
}

interface FilesServiceState {
    status: Status;
    files: File[];
}

@Injectable()
export class FilesService {

    private _store: Store<FilesServiceState>;
    private _request: Subscription;

    constructor(
        storeFactory: StoreFactory<FilesServiceState>,
        private _http: HttpService,
    ) {
        this._store = storeFactory.new(this._emptyState());
    }

    get files() {
        return this._store.state.filter(state => state.status != Status.NotInitialized).map(state => state.files);
    }

    get status() {
        return this._store.snapshot.status;
    }

    get(urls: string[]) {
        this._store.nextState(state => ({
            status: Status.Loading,
            files: [],
        }));

        if (this._request) {
            this._request.unsubscribe();
        }

        this._request = 
            Observable.from(urls)
                .concatMap(
                    url => this._http.get(url), 
                    (url, response) => ({ url: url, text: response.text() } as File))
                .subscribe(
                    files => {
                        this._store.nextState(state => ({
                            status: Status.Loading,
                            files: state.files.concat(files)
                        }), true);
                    },
                    error => {
                        this._store.nextState(state => ({
                            status: Status.Failed,
                            files: [],
                        }));
                    },
                    () => {
                        this._store.nextState(state => ({
                            status: Status.Ready,
                            files: state.files,
                        }));
                    });
    }

    put(url: string, buffer: string) {
        this._store.nextState(state => ({
            status: Status.Updating,
            files: state.files,
        }));

        return this._http.put(url, { buffer })
            .do(() => {
                this._store.nextState(state => ({
                    status: Status.Ready,
                    files: replaceItem(state.files, url, { url: url, text: buffer }),
                }));
            })
            .map(response => response.json());
    }

    private _emptyState() {
        return {
            status: Status.NotInitialized,
            files: [],
        } as FilesServiceState;
    }
}

function replaceItem(files: File[], id: string, newFile: File) {
    return files.map(existingFile => 
        existingFile.url == id 
            ? newFile
            : existingFile)
}
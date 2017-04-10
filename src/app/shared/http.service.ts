import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { ObjectMap } from './util';

const HTTP_OPTIONS = { withCredentials: true };

@Injectable()
export class HttpService {

  constructor(private _http: Http) {}

  get(url: string) {
      return this._http.get(`${environment.apiRoot}${url}`, HTTP_OPTIONS);
  }

  put(url: string, body: any) {
      return this._http.put(`${environment.apiRoot}${url}`, body, HTTP_OPTIONS);
  }

}

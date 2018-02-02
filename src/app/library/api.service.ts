import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
  private headers: Headers = new Headers({
    'content-type': 'application/json',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
  });

  private api_url: String = 'http://localhost:3000/api';
  constructor(private http: Http) { }

  private getJson(response: Response) {
    return response.json();
  }

  private checkForError(response: Response) {
    if ( response.status >= 200 && response.status < 300 ) {
      return response;
    } else {
      const error = new Error(response.statusText);
      error['response'] = response;
      console.log(error);
      throw error;
    }
  }

  public get(path: String): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, { headers: this.headers })
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson);
  }

  public post(path: String, body): Observable<any> {
    return this.http.post(
      `${this.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.headers })
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson);
  }

  public put(path: String, body): Observable<any> {
    return this.http.put(
      `${this.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.headers })
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson);
  }

  public delete(path: String): Observable<any> {
    return this.http.delete(`${this.api_url}${path}`, { headers: this.headers })
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson);
  }
}



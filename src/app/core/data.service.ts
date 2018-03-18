import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DataService {
	private _serverUrl = '//localhost:3000';
	private _headers: HttpHeaders = new HttpHeaders();

	constructor(private _http: HttpClient) {
		this._headers.append('Content-Type', 'application/json');
	}

	getList(schema: string): Observable<any> {
		return this._http.get(`/${schema}`, { headers: this._headers }).pipe(catchError(this.handleError));
	}

	getById(schema: string, id: string | number): Observable<any> {
		return this._http.get(`/${schema}/${id}`, { headers: this._headers }).pipe(catchError(this.handleError));
	}

	save(schema: string, data: any): Observable<any> {
		return this._http.post(`/${schema}`, data, { headers: this._headers }).pipe(catchError(this.handleError));
	}

	update(schema: string, id: string | number, data: any): Observable<any> {
		return this._http.put(`/${schema}/${id}`, data, { headers: this._headers });
	}

	delete(schema: string, id: string | number): Observable<any> {
		return this._http.delete(`/${schema}/${id}`, { headers: this._headers });
	}

	private handleError(error: any, caught: Observable<any>): ObservableInput<any> {
		const errMsg = error.message
			? error.message
			: error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error('DataService::handleError', errMsg);
		return _throw.call(errMsg);
	}
}

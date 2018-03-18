import { DataService } from './../data.service';
import { Observable } from 'rxjs/Observable';
import { Book } from './../models';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class BookResolver implements Resolve<Observable<Book[]>> {
	constructor(private _dataService: DataService) {}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[]> {
		return this._dataService.getList('book');
	}
}

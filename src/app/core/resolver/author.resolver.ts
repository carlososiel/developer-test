import { DataService } from './../data.service';
import { Observable } from 'rxjs/Observable';
import { Author } from './../models';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorResolver implements Resolve<Observable<Author[]>> {
	constructor(private _dataService: DataService) {}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Author[]> {
		return this._dataService.getList('author');
	}
}

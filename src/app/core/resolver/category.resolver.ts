import { DataService } from './../data.service';
import { Observable } from 'rxjs/Observable';
import { Category } from './../models';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryResolver implements Resolve<Observable<Category[]>> {
	constructor(private _dataService: DataService) {}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
		return this._dataService.getList('category');
	}
}

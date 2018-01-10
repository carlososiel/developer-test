import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';
import {AuthorService} from '../shared/services/author.service';

@Injectable()
export class AuthorResolve implements Resolve<any> {
  constructor(private authorService: AuthorService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.authorService.list().map(
      (list: any) => {
        return list
      }
    ).catch(err => {
      return new EmptyObservable();
    })
  }
}

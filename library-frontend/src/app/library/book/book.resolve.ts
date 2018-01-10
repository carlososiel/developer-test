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
import {BookService} from '../shared/services/book.service';

@Injectable()
export class BookResolve implements Resolve<any> {
  constructor(private bookService: BookService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const queryParams: any = {};
    const author = route.queryParams['author'];
    const category = route.queryParams['category'];
    if (author) {
      queryParams.author = author
    }

    if (category) {
      queryParams.category = category
    }

    return this.bookService.list(queryParams).map(
      (list: any) => {
        return list
      }
    ).catch(err => {
      return new EmptyObservable();
    })
  }
}

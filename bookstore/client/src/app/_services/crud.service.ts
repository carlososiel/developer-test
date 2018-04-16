import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export abstract class CrudService {
  protected url = 'http://localhost:3000/';

  protected model = '';

  protected constructor(private http: Http) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + this.model);
  }

  getDisplayedColumns(): string[] {
    return undefined;
  }
}

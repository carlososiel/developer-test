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

  getById(id: string) {
    return this.http.get(this.url + this.model + '/' + id);
  }

  update(model: any) {
    return this.http.patch(this.url + this.model + '/' + model._id, model);
  }

  delete(id: string) {
    return this.http.delete(this.url + this.model + '/' + id);
  }

  save(model: any) {
    return this.http.post(this.url + this.model, model);
  }

  getDisplayedColumns(): string[] {
    return undefined;
  }
}

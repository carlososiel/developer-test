import {CrudService} from '../_services/crud.service';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class BookCrudService extends CrudService {

  constructor(http: Http) {
    super(http);
    this.model = 'books';
  }

  getAllByFilter(filter: any) {
    return this.http.post(this.url + this.model + '/filter', filter);
  }

  getDisplayedColumns() {
    return ['title', 'description', 'author', 'category'];
  }
}

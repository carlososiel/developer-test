import {CrudService} from '../_services/crud.service';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthorCrudService extends CrudService {

  constructor(http: Http) {
    super(http);
    this.model = 'authors';
  }

  getDisplayedColumns() {
    return ['firstName', 'lastName'];
  }
}

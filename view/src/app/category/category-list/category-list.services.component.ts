import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CategoryListService {

  private server;

  constructor(private http: HttpClient) {
    this.server = 'http://127.0.0.1:3000/category';
  }

  index() {
    return this.http.get(this.server);
  }

  delete(id) {
    return this.http.delete<any>(this.server + "/" + id);
  }
}

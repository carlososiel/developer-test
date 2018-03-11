import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CategoryAddService {

  private server;

  constructor(private http: HttpClient) {
    this.server = 'http://127.0.0.1:3000/category';
  }

  store(category) {
    return this.http.post<any>(this.server, category);
  }
}

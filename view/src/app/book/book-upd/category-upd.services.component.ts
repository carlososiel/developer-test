import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BookUpdService {

  private server;

  constructor(private http: HttpClient) {
    this.server = 'http://127.0.0.1:3000/book';
  }

  update(book) {
    return this.http.put<any>(this.server, book);
  }

  get(id) {
    return this.http.get<any>(this.server + "/" + id);
  }
}

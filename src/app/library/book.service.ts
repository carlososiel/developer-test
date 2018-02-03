import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class BookService {

  private path: String = '/books';

  constructor(private api: ApiService) { }

  public createBook(book) {
    return this.api.post(this.path, book);
  }

  public getBooks(queryParams) {
    const keys = Object.keys(queryParams);
    let stringParams = '';
    if (keys.length > 0) {
      stringParams += '?';
      for (let i = 0; i < keys.length; i++) {
        stringParams += keys[i] + '=' + queryParams[keys[i]];
        if (i < keys.length - 1) {
          stringParams += '&';
        }
      }
    }
    return this.api.get(`${this.path}${stringParams}`);
  }

  public getById(id) {
    return this.api.get(`${this.path}/${id}`);
  }

  public removeBook(book) {
    return this.api.delete(`${this.path}/${book._id}`);
  }

  public updateBook(book) {
    const body = {};
    for (const key of Object.keys(book)) {
      if(key !== '_id') {
        body[key] = book[key];
      }
    }
    return this.api.put(`${this.path}/${book._id}`, body);
  }

}

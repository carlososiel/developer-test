import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private http: Http) {
    console.log('book service initialized...');
  }

  getBooks(filter = {}) {
    filter = this.toQueryString(filter);
    return this.http.get('/api/books' + '?' + filter)
      .map(res => res.json());
  }

  detailBook(id) {
    return this.http.get('/api/books/' + id)
      .map(res => res.json());
  }

  deleteBook(id) {
    return this.http.delete('/api/books/' + id)
      .map(res => res.json());
  }

  createBook(book) {
    return this.http.post('/api/books/', book)
      .map(res => res.json());
  }

  updateBook(id, book) {
    return this.http.put('/api/books/' + id, book)
      .map(res => res.json());
  }
  private toQueryString(filter) {
    const parts = [];
    for (let property in filter) {
      const value = filter[property];
      if(value != null && value != undefined) {
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
      }
    }
    return parts.join('&');
  }

}

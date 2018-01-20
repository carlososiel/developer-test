import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorService {

  constructor(private http: Http) {
    console.log('Author service initialized...');
  }

  getAuthors() {
    return this.http.get('/api/authors')
      .map(res => res.json());
  }

  detailAuthor(id) {
    return this.http.get('/api/authors/' + id)
      .map(res => res.json());
  }

  deleteAuthor(id) {
    return this.http.delete('/api/authors/' + id)
      .map(res => res.json());
  }

  createAuthor(author) {
    return this.http.post('/api/authors/', author)
      .map(res => res.json());
  }

  updateAuthor(id, author) {
    return this.http.put('/api/authors/' + id, author)
      .map(res => res.json());
  }

}


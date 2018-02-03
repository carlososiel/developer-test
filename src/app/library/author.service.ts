import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class AuthorService {

  private path: String = '/authors';
  constructor(private api: ApiService) { }

  public createAuthor(author) {
    return this.api.post(this.path, author);
  }

  public getAuthors() {
    return this.api.get(this.path);
  }

  public getById(id) {
    return this.api.get(`${this.path}/${id}`);
  }

  public removeAuthor(author) {
    return this.api.delete(`${this.path}/${author._id}`);
  }

  public updateAuthor(author) {
    const body = {};
    for (const key of Object.keys(author)) {
      if(key !== '_id') {
        body[key] = author[key];
      }
    }
    return this.api.put(`${this.path}/${author._id}`, body);
  }

}

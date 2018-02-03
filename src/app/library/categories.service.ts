import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class CategoriesService {

  private path: String = '/categories';

  constructor(private api: ApiService) { }

  public createCategory(category) {
    return this.api.post(this.path, category);
  }

  public getCategories() {
    return this.api.get(this.path);
  }

  public getById(id) {
    return this.api.get(`${this.path}/${id}`);
  }

  public removeCategory(category) {
    return this.api.delete(`${this.path}/${category._id}`);
  }

  public updateCategory(category) {
    const body = {};
    for (const key of Object.keys(category)) {
      if(key !== '_id') {
        body[key] = category[key];
      }
    }
    return this.api.put(`${this.path}/${category._id}`, body);
  }

}

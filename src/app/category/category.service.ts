import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(private http: Http) {
    console.log('Category service initialized...');
  }

  getCategories() {
    return this.http.get('api/categories')
      .map(res => res.json());
  }

  detailCategory(id) {
    return this.http.get('api/categories/' + id)
      .map(res => res.json());
  }

  deleteCategory(id) {
    return this.http.delete('/api/categories/' + id)
      .map(res => res.json());
  }

  createCategory(category) {
    return this.http.post('api/categories/', category)
      .map(res => res.json());
  }

  updateCategory(id, category) {
    return this.http.put('/api/categories/' + id, category)
      .map(res => res.json());
  }

}

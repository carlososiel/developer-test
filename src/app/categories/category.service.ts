import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Category } from './category';


@Injectable()
export class CategoryService {
  private categoryApiUrl = '/api/category';
  constructor(private http: Http) { }

  // get("/api/category")
  getCategories(): Promise<void | Category[]> {
    return this.http.get(this.categoryApiUrl)
      .toPromise()
      .then(response => response.json() as Category[])
      .catch(this.handleError);
  }

  // post("/api/category")
  createCategory(newCategory: Category): Promise<void | Category> {
    return this.http.post(this.categoryApiUrl, newCategory)
      .toPromise()
      .then(response => response.json() as Category)
      .catch(this.handleError);
  }

  // delete("/api/category/:id") 
  deleteCategory(categoryId: String): Promise<void | String> {
    return this.http.delete(this.categoryApiUrl + '/' + categoryId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);

  }

  // put("/api/category/:id") 
  updateCategory(category: Category): Promise<void | Category> {
    return this.http.put(this.categoryApiUrl + '/' + category._id, category)
      .toPromise()
      .then(response => response.json() as Category)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}

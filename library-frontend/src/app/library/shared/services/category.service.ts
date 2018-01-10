import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryModel, CategoryOptModel} from '../models/category.model';
import {Observable} from 'rxjs/Observable';
import {API_BASE_PATH} from '../variables';

@Injectable()
export class CategoryService {
  private basePath = API_BASE_PATH + '/category';

  constructor(protected httpClient: HttpClient) { }

  public list(queryParams: any = {}): Observable<{}>  {
    return this.httpClient.get<any>(
      this.basePath,
      {
        params: queryParams
      }
    );
  }

  public get(id: string): Observable<{}> {
    return this.httpClient.get<any>(
      `${this.basePath}/${id}`,
    );
  }

  public create(data: CategoryModel): Observable<{}> {
    return this.httpClient.post<any>(
      this.basePath,
      data
    );
  }

  public update(id: string, data: CategoryOptModel): Observable<{}> {
    return this.httpClient.patch<any>(
      `${this.basePath}/${id}`,
      data
    );
  }

  public remove(id: string): Observable<{}> {
    return this.httpClient.delete<any>(
      `${this.basePath}/${id}`,
    );
  }
}

import { Injectable } from '@angular/core';
import {API_BASE_PATH} from '../variables';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BookModel, BookOptModel} from '../models/book.model';

@Injectable()
export class BookService {
  private basePath = API_BASE_PATH + '/book';

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

  public create(data: BookModel): Observable<{}> {
    return this.httpClient.post<any>(
      this.basePath,
      data
    );
  }

  public update(id: string, data: BookOptModel): Observable<{}> {
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

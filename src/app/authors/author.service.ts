import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Author } from './author';

@Injectable()
export class AuthorService {
  private authorApiUrl = '/api/author';
  constructor(private http: Http) { }

  // get("/api/author")
  getAuthors(): Promise<void | Author[]> {
    return this.http.get(this.authorApiUrl)
      .toPromise()
      .then(response => response.json() as Author[])
      .catch(this.handleError);
  }

  // post("/api/author")
  createAuthor(newAuthor: Author): Promise<void | Author> {
    return this.http.post(this.authorApiUrl, newAuthor)
      .toPromise()
      .then(response => response.json() as Author)
      .catch(this.handleError);
  }

  // delete("/api/author/:id") 
  deleteAuthor(authorId: String): Promise<void | String> {
    return this.http.delete(this.authorApiUrl + '/' + authorId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);

  }

  // put("/api/author/:id") 
  updateAuthor(author: Author): Promise<void | Author> {
    return this.http.put(this.authorApiUrl + '/' + author._id, author)
      .toPromise()
      .then(response => response.json() as Author)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}

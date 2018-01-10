import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Book } from './book';

@Injectable()
export class BookService {
  private bookApiUrl = '/api/book';
  constructor(private http: Http) { }

  // get("/api/book")
  getBooks(): Promise<void | Book[]> {
    return this.http.get(this.bookApiUrl)
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);
  }

  // post("/api/book")
  createBook(newBook: Book): Promise<void | Book> {
    return this.http.post(this.bookApiUrl, newBook)
      .toPromise()
      .then(response => response.json() as Book)
      .catch(this.handleError);
  }

  // delete("/api/book/:id") 
  deleteBook(bookId: String): Promise<void | String> {
    return this.http.delete(this.bookApiUrl + '/' + bookId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);

  }

  // put("/api/book/:id") 
  updateBook(book: Book): Promise<void | Book> {
    return this.http.put(this.bookApiUrl + '/' + book._id, book)
      .toPromise()
      .then(response => response.json() as Book)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}

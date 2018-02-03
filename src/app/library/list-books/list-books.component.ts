import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  private books = [];

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private bookService: BookService) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      const queryParams = this.routerParams.snapshot.queryParams;
      this.getBooks(queryParams);
  }

  private getBooks(queryParams): void {
    this.bookService.getBooks(queryParams)
      .subscribe(res => this.books = res.books);
  }

  private removeBook(book): void {
    this.bookService.removeBook(book)
    .subscribe(res => {
      if (res == null) {
        const pos = this.books.findIndex(b => b._id === book._id);
        this.books.splice(pos, 1);
      }
    });
  }

  private createdBook(book): void {
    const params = this.routerParams.snapshot.queryParams;
    this.getBooks(params);
  }

  ngOnInit() { }

}

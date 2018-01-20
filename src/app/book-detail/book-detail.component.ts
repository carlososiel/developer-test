import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BookService} from '../book/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};
  category= {};
  author= {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.bookService.detailBook(id).subscribe(data => {
      this.book = data;
      this.category = data.category;
      this.author = data.author;
    });
  }

  deleteBook(id) {
    this.bookService.deleteBook(id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

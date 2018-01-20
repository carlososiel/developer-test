import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {BookService} from '../book/book.service';
import {CategoryService} from '../category/category.service';
import {AuthorService} from '../author/author.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  providers: [BookService, CategoryService, AuthorService],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book: any = {

    title: '',
    published_year: '0000',
    description: '',
    author: {
      _id : 0,
      first_name: '',
      last_name: '',
    },
    category: {
      _id: 0,
      name: '',
    }
  };
  categoryList = [];
  authorList= [];

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private categoryService: CategoryService,
              private router: Router) {  }

  ngOnInit() {
    this.getCategories();
    this.getAuthors();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categoryList = data;
    });
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe(data => {
      this.authorList = data;
    });
  }

  saveBook() {
    this.bookService.createBook(this.book)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

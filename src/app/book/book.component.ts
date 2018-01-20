import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BookService} from './book.service';
import {CategoryService} from '../category/category.service';
import {AuthorService} from '../author/author.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService, CategoryService, AuthorService],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {

  books = [];
  categoryList = [];
  authorList = [];
  filterCategory = '';
  filterAuthor = '';
  constructor(private bookService: BookService,
              private categoryService: CategoryService,
              private authorService: AuthorService) {
    this.categoryService.getCategories().subscribe(data => {
      this.categoryList = data;
    });
    this.authorService.getAuthors().subscribe(data => {
      this.authorList = data;
    });
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }
  filterBook() {
    this.bookService.getBooks({category : this.filterCategory, author : this.filterAuthor}).subscribe(data => {
      this.books = data;
    });
  }

  resetFilter() {
    this.filterCategory = this.filterAuthor = '';
    this.ngOnInit();
  }

}

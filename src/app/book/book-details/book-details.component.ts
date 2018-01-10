import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CategoryService } from '../../categories/category.service';

import { Category } from '../../categories/category';
import { AuthorService } from '../../authors/author.service';
import { Author } from '../../authors/author';


@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [CategoryService, AuthorService]
})
export class BookDetailsComponent implements OnInit {


  categories: Category[]
  authors: Author[]

  @Input()
  book: Book;

  @Input()
  createHandler: Function

  @Input()
  updateHandler: Function

  @Input()
  deleteHandler: Function

  constructor(private bookService: BookService, private categoryService: CategoryService, private authorService: AuthorService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .then((categories: Category[]) => {
        this.categories = categories
      })
    this.authorService.getAuthors()
      .then((authors: Author[]) => {
        this.authors = authors
      })
  }

  createBook(book: Book) {
    this.bookService.createBook(book)
      .then((newBook: Book) => {
        this.createHandler(newBook)
      })
  }
  updateBook(book: Book) {
    this.bookService.updateBook(book)
      .then((updateBook: Book) => {
        this.updateHandler(updateBook)
      })
  }
  deleteBook(bookId: String) {
    this.bookService.deleteBook(bookId)
      .then((msg: String) => {
        this.deleteHandler(bookId)
      })
  }

}

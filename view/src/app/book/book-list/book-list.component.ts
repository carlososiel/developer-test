import {Component, OnInit} from '@angular/core';

import {BookListService} from './book-list.services.component';
import {ModalConfirmComponent} from "../../ui/modal/modal.component";
import {AuthorListService} from "../../author/author-list/author-list.services.component";
import {CategoryListService} from "../../category/category-list/category-list.services.component";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private categories;
  private authors;
  private books;
  private author;
  private category;

  constructor(private authorListService: AuthorListService, private categoryService: CategoryListService, private bookListService: BookListService) {
    this.books = [];
    this.categories = [];
    this.authors = [];
    this.author = "";
    this.category = "";
  }

  ngOnInit() {
    this.search();
    this.authorListService.index().subscribe(resp => {
      this.authors = resp;
    });
    this.categoryService.index().subscribe(resp => {
      this.categories = resp;
    });
  }

  delete(book) {
    var me = this;
    var modal = new ModalConfirmComponent().show(function (action) {
      if (action)
        me.bookListService.delete(book._id).subscribe(resp => {
            if (resp.success) {
              me.books = me.books.filter(b => b._id !== book._id);
            }

        });
    });
  }

  search(){
    this.bookListService.index({category: this.category, author: this.author}).subscribe(resp => {
      this.books = resp;
    });
  }

}

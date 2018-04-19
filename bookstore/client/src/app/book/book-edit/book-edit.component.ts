import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthorCrudService} from '../../author/author-crud.service';
import {CategoryCrudService} from '../../category/category-crud.service';
import {BookCrudService} from '../book-crud.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  providers: [AuthorCrudService, CategoryCrudService, BookCrudService]
})
export class BookEditComponent implements OnInit {
  book: { _id: string, title: string, description: string, author: string };
  isAdd: boolean;
  authors: any[];
  categories: any[];
  errors = {title: {}, description: {}, author: {}, category: {}};

  constructor(
    private dialogReference: MatDialogRef<BookEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authorService: AuthorCrudService,
    private categoryService: CategoryCrudService,
    private bookCrudService: BookCrudService
  ) {
    this.book = data.object;
    this.isAdd = data.isAdd;
    authorService.getAll()
      .subscribe(
        (response) => {
          this.authors = JSON.parse(response['_body']).result;
        },
        (error) => {
          console.log(error);
        });
    categoryService.getAll()
      .subscribe(
        (response) => {
          this.categories = JSON.parse(response['_body']).result;
        },
        (error) => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogReference.close();
  }

  saveDialog() {
    switch (this.isAdd) {
      case true:
        this.bookCrudService.save(this.book)
          .subscribe(
            () => {
              this.dialogReference.close(this.book);
            },
            (error) => {
              this.errors = JSON.parse(error['_body']).errors;
            }
          );
        break;
      case false:
        this.bookCrudService.update(this.book)
          .subscribe(
            () => {
              this.dialogReference.close(this.book);
            },
            (error) => {
              this.errors = JSON.parse(error['_body']).errors;
            }
          );
        break;
    }
  }

}

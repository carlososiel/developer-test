import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {CrudService} from '../../_services/crud.service';
import {AuthorCrudService} from '../../author/author-crud.service';
import {CategoryCrudService} from '../../category/category-crud.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  providers: [AuthorCrudService, CategoryCrudService]
})
export class BookEditComponent implements OnInit {
  book: { _id: string, title: string, description: string, author: string };
  authors: any[];
  categories: any[];

  constructor(
    private dialogReference: MatDialogRef<BookEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authorService: AuthorCrudService,
    private categoryService: CategoryCrudService) {
    this.book = data;
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
    this.dialogReference.close(this.book);
  }

}

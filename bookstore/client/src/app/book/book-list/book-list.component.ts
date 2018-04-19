import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatDialog, MatDialogConfig} from '@angular/material';
import {MatSelectChange} from '@angular/material';

import {BookCrudService} from '../book-crud.service';
import {BookEditComponent} from '../book-edit/book-edit.component';
import {ConfirmationDialogComponent} from '../../_components/confirmation-dialog/confirmation-dialog.component';
import {AuthorCrudService} from '../../author/author-crud.service';
import {CategoryCrudService} from '../../category/category-crud.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookCrudService, AuthorCrudService, CategoryCrudService]
})
export class BookListComponent implements OnInit {

  displayedColumns = [];
  dataSource: MatTableDataSource<{}>;
  filter = {author: undefined, category: undefined};
  authors: any[];
  categories: any[];

  constructor(
    private bookCrudService: BookCrudService,
    private authorCrudService: AuthorCrudService,
    private categoryCrudService: CategoryCrudService,
    private dialog: MatDialog) {
    authorCrudService.getAll()
      .subscribe(
        (response) => {
          this.authors = JSON.parse(response['_body']).result;
        },
        (error) => {
          console.log(error);
        });
    categoryCrudService.getAll()
      .subscribe(
        (response) => {
          this.categories = JSON.parse(response['_body']).result;
        },
        (error) => {
          console.log(error);
        });
  }

  ngOnInit() {
    this.displayedColumns = this.bookCrudService.getDisplayedColumns();
    this.displayedColumns.push('options');

    this.loadDataSource();
  }

  openNewDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {object: {title: '', description: '', author: '', category: ''}, isAdd: true};
    const dialogReference = this.dialog.open(BookEditComponent, dialogConfig);

    dialogReference.afterClosed().subscribe(
      data => {
        if (!data) {
          return;
        }
        this.loadDataSource();
      }
    );

  }

  openEditDialog(id: string) {
    this.bookCrudService.getById(id).subscribe(
      (response) => {
        const book = JSON.parse(response['_body']).result;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {object: book, isAdd: false};
        const dialogReference = this.dialog.open(BookEditComponent, dialogConfig);

        dialogReference.afterClosed().subscribe(
          data => {
            if (!data) {
              return;
            }
            this.loadDataSource();
          }
        );
      },
      (error) => {
        console.log(error);
      });
  }

  openDeleteDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {text: 'Are you sure you want to delete this element?'};
    const dialogReference = this.dialog.open(ConfirmationDialogComponent, dialogConfig);

    dialogReference.afterClosed().subscribe(
      data => {
        if (!data) {
          return;
        } else {
          this.bookCrudService.delete(id).subscribe(
            () => {
              this.loadDataSource();
            }
          );
        }
      }
    );
  }

  loadDataSource() {

    this.bookCrudService.getAll()
      .subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource(JSON.parse(response['_body']).result);
        },
        (error) => {
          console.log(error);
        }
      );

  }

  reloadFilteredDataSource() {

    this.bookCrudService.getAllByFilter(this.filter)
      .subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource(JSON.parse(response['_body']).result);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleSelectionChange($event: MatSelectChange) {
    this.reloadFilteredDataSource();
  }
}

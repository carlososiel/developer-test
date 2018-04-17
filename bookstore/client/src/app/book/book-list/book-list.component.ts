import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatDialog, MatDialogConfig} from '@angular/material';

import {CrudService} from '../../_services/crud.service';
import {BookCrudService} from '../book-crud.service';
import {BookEditComponent} from '../book-edit/book-edit.component';
import {ConfirmationDialogComponent} from '../../_components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [{provide: CrudService, useClass: BookCrudService}]
})
export class BookListComponent implements OnInit {

  displayedColumns = [];
  dataSource: MatTableDataSource<{}>;

  constructor(private crudService: CrudService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.displayedColumns = this.crudService.getDisplayedColumns();
    this.displayedColumns.push('options');

    this.loadDataSource();
  }

  openNewDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {title: '', description: '', author: '', category: ''};
    const dialogReference = this.dialog.open(BookEditComponent, dialogConfig);

    dialogReference.afterClosed().subscribe(
      data => {
        if (!data) {
          return;
        }
        this.crudService.save(data)
          .subscribe(
            () => {
              this.loadDataSource();
            },
            (error) => {
              console.log((error));
            }
          );
      }
    );

  }

  openEditDialog(id: string) {
    this.crudService.getById(id).subscribe(
      (response) => {
        const book = JSON.parse(response['_body']).result;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = book;
        const dialogReference = this.dialog.open(BookEditComponent, dialogConfig);

        dialogReference.afterClosed().subscribe(
          data => {
            if (!data) {
              return;
            }
            this.crudService.update(data)
              .subscribe(
                () => {
                  this.loadDataSource();
                },
                (error) => {
                  console.log((error));
                }
              );
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
          this.crudService.delete(id).subscribe(
            () => {
              this.loadDataSource();
            }
          );
        }
      }
    );
  }

  loadDataSource() {

    this.crudService.getAll()
      .subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource(JSON.parse(response['_body']).result);
        },
        (error) => {
          console.log(error);
        }
      );

  }
}

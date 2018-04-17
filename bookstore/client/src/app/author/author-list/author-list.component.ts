import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {MatDialog, MatDialogConfig, MatTableDataSource} from '@angular/material';

import {AuthorCrudService} from '../author-crud.service';
import {BookEditComponent} from '../../book/book-edit/book-edit.component';
import {ConfirmationDialogComponent} from '../../_components/confirmation-dialog/confirmation-dialog.component';
import {AuthorEditComponent} from '../author-edit/author-edit.component';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  providers: [{provide: CrudService, useClass: AuthorCrudService}]
})
export class AuthorListComponent implements OnInit {

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
    dialogConfig.data = {firstName: '', lastName: ''};
    const dialogReference = this.dialog.open(AuthorEditComponent, dialogConfig);

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
        const author = JSON.parse(response['_body']).result;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = author;
        const dialogReference = this.dialog.open(AuthorEditComponent, dialogConfig);

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

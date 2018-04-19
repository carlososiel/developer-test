import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig, MatTableDataSource} from '@angular/material';

import {CrudService} from '../../_services/crud.service';
import {CategoryCrudService} from '../category-crud.service';
import {ConfirmationDialogComponent} from '../../_components/confirmation-dialog/confirmation-dialog.component';
import {CategoryEditComponent} from '../category-edit/category-edit.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [{provide: CrudService, useClass: CategoryCrudService}]
})
export class CategoryListComponent implements OnInit {

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
    dialogConfig.data = {object: {code: '', description: ''}, isAdd: true};
    const dialogReference = this.dialog.open(CategoryEditComponent, dialogConfig);

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
    this.crudService.getById(id).subscribe(
      (response) => {
        const category = JSON.parse(response['_body']).result;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {object: category, isAdd: false};
        ;
        const dialogReference = this.dialog.open(CategoryEditComponent, dialogConfig);

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

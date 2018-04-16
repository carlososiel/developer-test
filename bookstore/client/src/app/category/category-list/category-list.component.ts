import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

import {CrudService} from '../../_services/crud.service';
import {CategoryCrudService} from '../category-crud.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [{provide: CrudService, useClass: CategoryCrudService}]
})
export class CategoryListComponent implements OnInit {

  displayedColumns = [];
  dataSource: MatTableDataSource<{}>;

  constructor(private crudService: CrudService) {
  }

  ngOnInit() {
    this.displayedColumns = this.crudService.getDisplayedColumns();
    this.displayedColumns.push('options');

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

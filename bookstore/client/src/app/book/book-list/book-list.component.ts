import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

import {CrudService} from '../../_services/crud.service';
import {BookCrudService} from '../book-crud.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [{provide: CrudService, useClass: BookCrudService}]
})
export class BookListComponent implements OnInit {

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

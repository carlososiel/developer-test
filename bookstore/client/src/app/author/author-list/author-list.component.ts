import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {MatTableDataSource} from '@angular/material';
import {AuthorCrudService} from '../author-crud.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  providers: [{provide: CrudService, useClass: AuthorCrudService}]
})
export class AuthorListComponent implements OnInit {

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

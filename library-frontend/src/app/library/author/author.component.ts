import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {AuthorService} from '../shared/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  data: any;
  dataSource: MatTableDataSource<Array<any>>;
  displayedColumns: Array<any>;
  selection: SelectionModel<any>;

  constructor(private route: ActivatedRoute,
              private authorService: AuthorService) {
    this.data = {};
    this.displayedColumns = ['select', 'id', 'first_name', 'last_name', 'action'];

    this.route.data
      .subscribe(
        (response: any) => {
          if (response.data) {
            this.dataSource = new MatTableDataSource(response.data);
            this.selection = new SelectionModel(false, null);
          }
        },
        err => {
          console.log(err)
        }
      );
  }

  ngOnInit() {
  }

  onSelectionChange(event, row): void {
    if (event) {
      this.selection.toggle(row)
    }
    if (this.selection.hasValue()) {
      this.data = Object.assign({}, this.selection.selected[0]);
    } else {
      this.data = {};
    }
  }

  save(form): void {
    if (form.form.valid) {
      if (this.selection.hasValue()) {
        this.authorService.update(
          this.data._id,
          this.data
        ).subscribe((response: any) => {
          if (!response.hasOwnProperty('error')) {
            this.selection.selected[0].first_name = response.first_name;
            this.selection.selected[0].last_name = response.last_name;

            this.data = Object.assign({}, response);
          } else {
            // handle server side error
          }
        })
      } else {
        this.authorService.create(this.data).subscribe((response: any) => {
          if (!response.hasOwnProperty('error')) {
            this.dataSource.data = this.dataSource.data.concat([response]);
            this.data = Object.assign({}, response);
            this.selection.select(response)
          } else {
            // handle server side error
          }
        })
      }
    }
  }

  remove(id): void {
    this.authorService.remove(id).subscribe((response: any) => {
      if (!response.hasOwnProperty('error')) {
        this.dataSource.data = this.dataSource.data.filter((obj: any) => obj._id !== response._id);
      } else {
        // handle server side error
      }
    })
  }
}

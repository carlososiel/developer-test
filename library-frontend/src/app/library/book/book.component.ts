import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {CategoryService} from '../shared/services/category.service';
import {AuthorService} from '../shared/services/author.service';
import {FormControl} from '@angular/forms';
import {BookService} from '../shared/services/book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  data: any;
  category: FormControl;
  dataSource: MatTableDataSource<Array<any>>;
  displayedColumns: Array<any>;
  selection: SelectionModel<any>;

  categories: Array<any>;
  authors: Array<any>;

  constructor(private route: ActivatedRoute,
              private bookyService: BookService,
              private categoryService: CategoryService,
              private authorService: AuthorService) {
    this.category = new FormControl();

    this.data = {};
    this.displayedColumns = ['select', 'id', 'title', 'author', 'category', 'action'];

    this.categoryService.list().subscribe((response: any) => {
      if (!response.hasOwnProperty('error')) {
        this.categories = response;
      } else {
        this.categories = [];
      }
    });

    this.authorService.list().subscribe((response: any) => {
      if (!response.hasOwnProperty('error')) {
        this.authors = response;
      } else {
        this.authors = [];
      }
    });

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
      this.data.author = this.data.author._id;
      this.data.category = this.data.category._id;
    } else {
      this.data = {};
    }
  }

  save(form): void {
    if (form.form.valid) {
      if (this.selection.hasValue()) {
        this.bookyService.update(
          this.data._id,
          this.data
        ).subscribe((response: any) => {
          if (!response.hasOwnProperty('error')) {
            this.bookyService.get(response._id).subscribe((response: any) => {
              console.log(response)

              this.selection.selected[0].title = response.title;
              this.selection.selected[0].category = response.category;
              this.selection.selected[0].author = response.author;

              this.data = Object.assign({}, response);
              this.data.author = this.data.author._id;
              this.data.category = this.data.category._id;
            });
          } else {
            // handle server side error
          }
        })
      } else {
        this.bookyService.create(this.data).subscribe((response: any) => {
          if (!response.hasOwnProperty('error')) {
            this.bookyService.get(response._id).subscribe((response: any) => {
              console.log(response)
              this.dataSource.data = this.dataSource.data.concat([response]);

              this.data = Object.assign({}, response);
              this.data.author = this.data.author._id;
              this.data.category = this.data.category._id;
              this.selection.select(response)
            });
          } else {
            // handle server side error
          }
        })
      }
    }
  }

  remove(id): void {
    this.bookyService.remove(id).subscribe((response: any) => {
      if (!response.hasOwnProperty('error')) {
        this.dataSource.data = this.dataSource.data.filter((obj: any) => obj._id !== response._id);
      } else {
        // handle server side error
      }
    })
  }
}

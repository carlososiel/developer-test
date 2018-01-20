import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BookService} from '../book/book.service';
import {CategoryService} from '../category/category.service';
import {AuthorService} from '../author/author.service';
import 'rxjs/add/observable/forkJoin';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  providers: [BookService, CategoryService, AuthorService],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {
  err:{
    published_year:""
  };
  book: any = {

    title: '',
    published_year: '0000',
    description: '',
    author: {
      _id : 0,
      first_name: '',
      last_name: '',
    },
    category: {
      _id: 0,
      name: '',
    }
  };
  categoryList = [];
  authorList= [];

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private categoryService: CategoryService,
              private router: Router,
              private route: ActivatedRoute) {
    route.params.subscribe(p => {
      this.book._id = p['id'];
    });
  }

  ngOnInit() {
    Observable.forkJoin([
      this.categoryService.getCategories(),
      this.authorService.getAuthors(),
      this.bookService.detailBook(this.book._id)])
      .subscribe(data => {
        this.categoryList = data[0];
          this.authorList = data[1];
          this.book = data[2];
      });
  }
  updateBook(id) {
    this.bookService.updateBook( id, this.book)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (res) => {
          this.err = res.json().errors;
        }
      );
  }

}

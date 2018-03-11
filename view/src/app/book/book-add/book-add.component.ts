import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthorListService} from "../../author/author-list/author-list.services.component";
import {CategoryListService} from "../../category/category-list/category-list.services.component";
import {BookAddService} from "./book-add.services.component";
import {Router} from '@angular/router'

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookAddComponent implements OnInit {

  private categories;
  private authors;
  private book;

  constructor(private authorListService: AuthorListService, private categoryService: CategoryListService, private bookAddService: BookAddService, private router: Router) {
    this.categories = [];
    this.authors = [];
    this.book = {};
  }

  ngOnInit() {
    this.authorListService.index().subscribe(resp => {
      if (!resp.hasOwnProperty('status'))
        this.authors = resp;
    });
    this.categoryService.index().subscribe(resp => {
      if (!resp.hasOwnProperty('status'))
        this.categories = resp;
    });
  }

  save(){
    this.bookAddService.store(this.book).subscribe(resp => {
        if(resp.success)
          this.router.navigateByUrl('book');
    })
  }


}

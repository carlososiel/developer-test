import {Component, OnInit} from '@angular/core';
import {BookUpdService} from "./category-upd.services.component";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorListService} from "../../author/author-list/author-list.services.component";
import {CategoryListService} from "../../category/category-list/category-list.services.component";

@Component({
  selector: 'app-book-upd',
  templateUrl: './book-upd.component.html',
  styleUrls: ['./book-upd.component.css']
})
export class BookUpdComponent implements OnInit {

  private categories;
  private authors;
  private book;

  constructor(private authorListService: AuthorListService, private categoryService: CategoryListService, private bookUpdService: BookUpdService, private router: Router, private activeRoute: ActivatedRoute) {
    this.book = {};
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.bookUpdService.get(params.id).subscribe(res => {
        this.book = res;
      });
    });
    this.authorListService.index().subscribe(resp => {
      this.authors = resp;
    });
    this.categoryService.index().subscribe(resp => {
      this.categories = resp;
    });
  }

  save() {
    this.bookUpdService.update(this.book).subscribe(res => {
      if (res.success)
        this.router.navigateByUrl('book');
    });
  }
}

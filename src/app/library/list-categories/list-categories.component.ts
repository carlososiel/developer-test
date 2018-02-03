import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../categories.service';


@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  private categories = [];
  constructor(private categoryService: CategoriesService) {
    this.categoryService.getCategories()
    .subscribe(res => this.categories = res.categories);
  }

  private removeCategory(category): void {
    this.categoryService.removeCategory(category)
    .subscribe(res => {
      if (res == null) {
        const pos = this.categories.findIndex(c => c._id === category._id);
        this.categories.splice(pos, 1);
      }
    });
  }

  private createdCategory(category): void {
    this.categories.push(category);
  }

  ngOnInit() { }

}

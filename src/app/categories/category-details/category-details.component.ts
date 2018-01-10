import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  @Input()
  category: Category;

  @Input()
  createHandler: Function

  @Input()
  updateHandler: Function

  @Input()
  deleteHandler: Function

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  createCategory(category: Category) {
    this.categoryService.createCategory(category)
      .then((newCategory: Category) => {
        this.createHandler(newCategory)
      })
  }
  updateCategory(category: Category) {
    this.categoryService.updateCategory(category)
      .then((updateCategory: Category) => {
        this.createHandler(updateCategory)
      })
  }
  deleteCategory(categoryId: String) {
    this.categoryService.deleteCategory(categoryId)
      .then((msg: String) => {
        this.deleteHandler(categoryId)
      })
  }

}

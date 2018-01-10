import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {
  categories: Category[]
  selectedCategory: Category

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .then((categories: Category[]) => {
        this.categories = categories
      })
  }

  private getIndexOfCategory = (categoryId: String) => {
    return this.categories.findIndex((category) => {
      return category._id === categoryId;
    });
  }

  selectCategory(category: Category) {
    this.selectedCategory = category
  }

  createNewCategory() {
    var category: Category = {
      name: ''
    }
    this.selectedCategory = category
  }

  deleteCategory = (categoryId: String) => {
    var idx = this.getIndexOfCategory(categoryId)
    if (idx !== -1) {
      this.categories.splice(idx, 1)
      this.selectCategory(null)
    }
    return this.categories
  }

  addCategory = (category: Category) => {
    this.categories.push(category)
    this.selectCategory(category)
    return this.categories
  }

  updateCategory = (category: Category) => {
    var idx = this.getIndexOfCategory(category._id)
    if (idx !== -1) {
      this.categories[idx] = category
      this.selectCategory(category)
    }
    return this.categories
  }

}

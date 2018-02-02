import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../categories.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-category-select-required',
  templateUrl: './book-category-select-required.component.html',
  styleUrls: ['./book-category-select-required.component.css']
})
export class BookCategorySelectRequiredComponent implements OnInit {
  private categoryControl = new FormControl('', [Validators.required]);
  @Input() category: string;
  @Output() categoryChanged = new EventEmitter();
  private categories = [];

  constructor(private categoryService: CategoriesService) {
    this.categoryService.getCategories()
      .subscribe(res => this.categories = res.categories);
   }

  private changeCategory(): void {
    this.categoryChanged.next(this.category);
  }

  ngOnInit() {
    if (this.category) {
      this.categoryControl.setValue(this.category);
    }
  }

}

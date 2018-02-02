import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-book-category-filter',
  templateUrl: './book-category-filter.component.html',
  styleUrls: ['./book-category-filter.component.css']
})
export class BookCategoryFilterComponent implements OnInit {
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

  ngOnInit() { }

}

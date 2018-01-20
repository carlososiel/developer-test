import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
  providers: [ CategoryService],
  encapsulation: ViewEncapsulation.None
})
export class CategoryCreateComponent implements OnInit {

  category = {};

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
  }

  saveCategory() {
    this.categoryService.createCategory(this.category)
      .subscribe(res => {
          this.router.navigate(['/category']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

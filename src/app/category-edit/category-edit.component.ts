import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
  providers: [ CategoryService],
  encapsulation: ViewEncapsulation.None
})
export class CategoryEditComponent implements OnInit {

  category: any = {};

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategory(this.route.snapshot.params['id']);
  }

  getCategory(id) {
    this.categoryService.detailCategory( id).subscribe(data => {
      this.category = data;
    });
  }

  updateCategory(id) {
    this.categoryService.updateCategory( id, this.category)
      .subscribe(res => {
        this.router.navigate(['/category']);
        }, (err) => {
        console.log(err);
      });
  }

}

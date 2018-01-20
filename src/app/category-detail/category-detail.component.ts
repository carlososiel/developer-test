import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [ CategoryService],
  encapsulation: ViewEncapsulation.None
})
export class CategoryDetailComponent implements OnInit {

  category = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategoryDetail(this.route.snapshot.params['id']);
  }

  getCategoryDetail(id) {
    this.categoryService.detailCategory(id).subscribe(data => {
      this.category = data;
    });
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id)
      .subscribe(res => {
          this.router.navigate(['/category']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

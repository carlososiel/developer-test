import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryService} from './category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ CategoryService],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {

  categories: any;

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {CategoryAddService} from "./category-add.services.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  private category;

  constructor(private categoryAddService: CategoryAddService, private router: Router) {
    this.category = {};
  }

  ngOnInit() {
  }

  save() {
    this.categoryAddService.store(this.category).subscribe(res => {
      if (res.success)
        this.router.navigateByUrl('category');
    });
  }

}

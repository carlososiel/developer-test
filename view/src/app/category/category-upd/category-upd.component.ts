import {Component, OnInit} from '@angular/core';
import {CategoryUpdService} from "./category-upd.services.component";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-upd',
  templateUrl: './category-upd.component.html',
  styleUrls: ['./category-upd.component.css']
})
export class CategoryUpdComponent implements OnInit {

  private category;

  constructor(private categoryUpdService: CategoryUpdService, private router: Router, private activeRoute: ActivatedRoute) {
    this.category = {};
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.categoryUpdService.get(params.id).subscribe(res => {
        this.category = res;
      });
    });
  }

  save() {
    this.categoryUpdService.update(this.category).subscribe(res => {
      if (res.success)
        this.router.navigateByUrl('category');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from './../categories.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  private nameControl = new FormControl('', [Validators.required]);

  private descriptionControl = new FormControl('', [Validators.required]);

  private id: String;

  private category = null;

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private categoryService: CategoriesService) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.id = this.routerParams.snapshot.params['id'];
      this.categoryService.getById(this.id)
      .subscribe(res => {
        if (res.category !== undefined) {
          this.category = res.category;
        }
      });
  }

  private update(): void {
    if (this.validForm()) {
      this.categoryService.updateCategory(this.category)
      .subscribe(res => {
        if (res.category !== undefined) {
          this.router.navigate(['categories']);
        }
      });
    }
  }

  private validForm(): boolean {
    return this.nameControl.valid && this.descriptionControl.valid;
  }

  ngOnInit() { }

}

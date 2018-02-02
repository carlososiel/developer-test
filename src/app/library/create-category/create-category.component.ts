import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from './../categories.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  private nameControl = new FormControl('', [Validators.required]);

  private descriptionControl = new FormControl('', [Validators.required]);
  private category = {
    name: '',
    description: ''
  };

  private fullForm = false;

  @Output() created = new EventEmitter();

  constructor(private categoryService: CategoriesService) { }

  private toggleForm(value: boolean): void {
    this.fullForm = value;
  }

  private cancel(): void {
    this.toggleForm(false);
    this.reset();
  }

  private reset(): void {
    this.category = {
      name: '',
      description: ''
    };

    this.nameControl.reset();
    this.descriptionControl.reset();
  }

  private create(): void {
    if (this.validForm()) {
      this.categoryService.createCategory(this.category)
      .subscribe(res => {
        if (res.category !== undefined) {
          this.reset();
          this.toggleForm(false);
          this.created.next(res.category);
        }
      });
    }
  }

  private validForm(): boolean {
    return this.nameControl.valid && this.descriptionControl.valid;
  }

  ngOnInit() { }

}

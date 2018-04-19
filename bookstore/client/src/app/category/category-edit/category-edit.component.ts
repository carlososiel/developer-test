import {Component, Inject, OnInit} from '@angular/core';
import {AuthorEditComponent} from '../../author/author-edit/author-edit.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CategoryCrudService} from '../category-crud.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
  providers: [CategoryCrudService]
})
export class CategoryEditComponent implements OnInit {
  category: { _id: string, code: string, description: string };
  isAdd: boolean;
  errors = {code: {}, description: {}};

  constructor(
    private dialogReference: MatDialogRef<AuthorEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryCrudService: CategoryCrudService) {
    this.category = data.object;
    this.isAdd = data.isAdd;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogReference.close();
  }

  saveDialog() {
    switch (this.isAdd) {
      case true:
        this.categoryCrudService.save(this.category)
          .subscribe(
            () => {
              this.dialogReference.close(this.category);
            },
            (error) => {
              this.errors = JSON.parse(error['_body']).errors;
            }
          );
        break;
      case false:
        this.categoryCrudService.update(this.category)
          .subscribe(
            () => {
              this.dialogReference.close(this.category);
            },
            (error) => {
              this.errors = JSON.parse(error['_body']).errors;
            }
          );
        break;
    }
  }

}

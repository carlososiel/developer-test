import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthorCrudService} from '../author-crud.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css'],
  providers: [AuthorCrudService]
})
export class AuthorEditComponent implements OnInit {
  author: { _id: string, firstName: string, lastName: string };
  isAdd: boolean;
  errors = {firstName: {}, lastName: {}};

  constructor(
    private dialogReference: MatDialogRef<AuthorEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authorCrudService: AuthorCrudService) {
    this.author = data.object;
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
        this.authorCrudService.save(this.author)
          .subscribe(
            () => {
              this.dialogReference.close(this.author);
            },
            (error) => {
              this.errors = JSON.parse(error['_body']).errors;
            }
          );
        break;
      case false:
        this.authorCrudService.update(this.author)
          .subscribe(
            () => {
              this.dialogReference.close(this.author);
            },
            (error) => {
              this.errors = JSON.parse(error['_body']).errors;
            }
          );
        break;
    }
  }

}

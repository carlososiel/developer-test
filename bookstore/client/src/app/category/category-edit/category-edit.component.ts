import {Component, Inject, OnInit} from '@angular/core';
import {AuthorEditComponent} from '../../author/author-edit/author-edit.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: { _id: string, code: string, description: string };

  constructor(
    private dialogReference: MatDialogRef<AuthorEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.category = data;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogReference.close();
  }

  saveDialog() {
    this.dialogReference.close(this.category);
  }

}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  author: { _id: string, firstName: string, lastName: string };

  constructor(
    private dialogReference: MatDialogRef<AuthorEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.author = data;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogReference.close();
  }

  saveDialog() {
    this.dialogReference.close(this.author);
  }

}

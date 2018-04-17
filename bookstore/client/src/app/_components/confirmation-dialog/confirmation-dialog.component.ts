import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BookEditComponent} from '../../book/book-edit/book-edit.component';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  text: string;

  constructor(
    private dialogReference: MatDialogRef<BookEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.text = data.text;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogReference.close(false);
  }

  saveDialog() {
    this.dialogReference.close(true);
  }

}

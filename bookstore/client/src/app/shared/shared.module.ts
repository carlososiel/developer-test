import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';
import {ConfirmationDialogComponent} from '../_components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    HttpModule
  ],
  exports:
    [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatCardModule,
      MatToolbarModule,
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatOptionModule,
      HttpModule
    ],
  entryComponents:
    [ConfirmationDialogComponent]
})

export class SharedModule {
}

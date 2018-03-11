import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalConfirmComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ModalConfirmComponent],
  exports: [ModalConfirmComponent]
})
export class UiModule { }

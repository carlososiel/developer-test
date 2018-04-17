import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookListComponent} from './book-list/book-list.component';
import {SharedModule} from '../shared/shared.module';
import {BookRoutingModule} from './book-routing.module';
import {BookEditComponent} from './book-edit/book-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BookRoutingModule
  ],
  declarations: [BookListComponent, BookEditComponent],
  entryComponents: [BookEditComponent]
})
export class BookModule {
}

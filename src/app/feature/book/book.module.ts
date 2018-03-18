import { SharedModule } from './../../shared/shared.module';
import { BookRoutingModule } from './book.routing';
import { NgModule } from '@angular/core';
import { BookComponent } from './book.component';
import { BookCreateEditComponent } from './book-create-edit/book-create-edit.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
	imports: [ SharedModule, BookRoutingModule ],
	declarations: [ BookComponent, BookCreateEditComponent, BookListComponent ],
	exports: [ SharedModule, BookComponent, BookCreateEditComponent, BookListComponent ]
})
export class BookModule {}

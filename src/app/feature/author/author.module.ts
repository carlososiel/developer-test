import { AuthorCreateEditComponent } from './author-create-edit/author-create-edit.component';
import { AuthorRoutingModule } from './author.routing';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { AuthorListComponent } from './author-list/author-list.component';

@NgModule({
	imports: [ SharedModule, AuthorRoutingModule ],
	declarations: [ AuthorComponent, AuthorCreateEditComponent, AuthorListComponent ],
	exports: [ AuthorComponent, AuthorCreateEditComponent, AuthorListComponent ]
})
export class AuthorModule {}

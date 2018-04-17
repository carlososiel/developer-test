import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorListComponent} from './author-list/author-list.component';
import {AuthorRoutingModule} from './author-routing.module';
import {SharedModule} from '../shared/shared.module';
import { AuthorEditComponent } from './author-edit/author-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule
  ],
  declarations: [AuthorListComponent, AuthorEditComponent],
  entryComponents: [AuthorEditComponent]
})
export class AuthorModule {
}

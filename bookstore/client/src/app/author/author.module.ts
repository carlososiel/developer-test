import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorRoutingModule } from './author-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule
  ],
  declarations: [AuthorListComponent]
})
export class AuthorModule { }

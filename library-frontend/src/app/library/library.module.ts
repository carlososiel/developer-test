import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

import {BookComponent} from './book/book.component';
import {BookResolve} from './book/book.resolve';
import {AuthorComponent} from './author/author.component';
import {AuthorResolve} from './author/author.resolve';
import {CategoryComponent} from './category/category.component';
import {CategoryResolve} from './category/category.resolve';
import {CategoryService} from './shared/services/category.service';
import {AuthorService} from './shared/services/author.service';
import {BookService} from './shared/services/book.service';
import {LibraryRoutingModule} from './library-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LibraryRoutingModule,

    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  declarations: [
    BookComponent,
    AuthorComponent,
    CategoryComponent
  ],
  providers: [
    CategoryService,
    AuthorService,
    BookService,

    CategoryResolve,
    AuthorResolve,
    BookResolve,
  ]
})
export class LibraryModule {
}

import { RouterModule } from '@angular/router';
import { ROUTES } from './routes.module';

import { ApiService } from './api.service';
import { AuthorService } from './author.service';
import { CategoriesService } from './categories.service';
import { BookService } from './book.service';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';

import { BooksComponent } from './books/books.component';
import { AuthorComponent } from './author/author.component';
import { CategoryComponent } from './category/category.component';
import { MainComponent } from './main/main.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NothingComponent } from './nothing/nothing.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { ViewAuthorComponent } from './view-author/view-author.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterComponent } from './book-filter/book-filter.component';
import { BookCategoryFilterComponent } from './book-category-filter/book-category-filter.component';
import { BookAuthorFilterComponent } from './book-author-filter/book-author-filter.component';
import { BookAuthorSelectRequiredComponent } from './book-author-select-required/book-author-select-required.component';
import { BookCategorySelectRequiredComponent } from './book-category-select-required/book-category-select-required.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  declarations: [
    MainComponent,
    BooksComponent,
    ListBooksComponent,
    AuthorComponent,
    ListAuthorsComponent,
    CategoryComponent,
    ListCategoriesComponent,
    NothingComponent,
    CategoryCardComponent,
    AuthorCardComponent,
    ViewAuthorComponent,
    ViewCategoryComponent,
    ViewBookComponent,
    CreateAuthorComponent,
    CreateCategoryComponent,
    CreateBookComponent,
    BookCardComponent,
    BookFilterComponent,
    BookCategoryFilterComponent,
    BookAuthorFilterComponent,
    BookAuthorSelectRequiredComponent,
    BookCategorySelectRequiredComponent
  ],
  providers: [
    ApiService,
    BookService,
    AuthorService,
    CategoriesService
  ],
  bootstrap: [MainComponent]
})
export class LibraryModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { AuthorComponent } from './author/author.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  {
    path: 'authors',
    component: AuthorComponent
  },
  {
    path: 'author-details/:id',
    component: AuthorDetailComponent,
    data: { title: 'Author Details' }
  },
  {
    path: 'author-create',
    component: AuthorCreateComponent,
    data: { title: 'Create Author' }
  },
  {
    path: 'author-edit/:id',
    component: AuthorEditComponent,
    data: { title: 'Edit Author' }
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'category-details/:id',
    component: CategoryDetailComponent,
    data: { title: 'Category Details' }
  },
  {
    path: 'category-create',
    component: CategoryCreateComponent,
    data: { title: 'Create Category' }
  },
  {
    path: 'category-edit/:id',
    component: CategoryEditComponent,
    data: { title: 'Edit Category' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: 'books'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    CategoryComponent,
    CategoryCreateComponent,
    CategoryDetailComponent,
    CategoryEditComponent,
    AuthorComponent,
    AuthorCreateComponent,
    AuthorDetailComponent,
    AuthorEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

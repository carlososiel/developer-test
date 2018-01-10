import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './authors/author-details/author-details.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { MatToolbarModule, MatButtonModule, MatGridListModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
const appRoutes: Routes = [
  { path: 'categories', component: CategoryListComponent },  
  { path: 'authors', component: AuthorListComponent },  
  { path: 'books', component: BookListComponent },  
  
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    BookListComponent,
    BookDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

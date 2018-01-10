import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book/book.component';
import {CategoryComponent} from './category/category.component';
import {AuthorComponent} from './author/author.component';
import {AuthorResolve} from './author/author.resolve';
import {BookResolve} from './book/book.resolve';
import {CategoryResolve} from './category/category.resolve';


const libraryRoutes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BookComponent,
    resolve: {
      data: BookResolve
    },
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'categories',
    component: CategoryComponent,
    resolve: {
      data: CategoryResolve
    },
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'authors',
    component: AuthorComponent,
    resolve: {
      data: AuthorResolve
    },
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(libraryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class LibraryRoutingModule {
}

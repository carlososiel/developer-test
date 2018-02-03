import { Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { ViewAuthorComponent } from './view-author/view-author.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { NothingComponent } from './nothing/nothing.component';


export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'library',
        pathMatch: 'full'
    },
    {
        path: 'library',
        component: BooksComponent,
        children: [
            {
                path: '',
                component: ListBooksComponent
            },
            {
                path: ':id',
                component: ViewBookComponent
            }
        ]
    },
    {
        path: 'authors',
        component: AuthorComponent,
        children: [
            {
                path: '',
                component: ListAuthorsComponent
            },
            {
                path: ':id',
                component: ViewAuthorComponent
            }
        ]
    },
    {
        path: 'categories',
        component: CategoryComponent,
        children: [
            {
                path: '',
                component: ListCategoriesComponent
            },
            {
                path: ':id',
                component: ViewCategoryComponent
            }
        ]
    },
    {
        path: '**',
        component: NothingComponent
    }
];

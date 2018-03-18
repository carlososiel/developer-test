import { BookCreateEditComponent } from './book-create-edit/book-create-edit.component';
import { CategoryResolver } from './../../core/resolver/category.resolver';
import { AuthorResolver } from './../../core/resolver/author.resolver';
import { BookResolver } from './../../core/resolver/book.resolver';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: BookComponent,
		children: [
			{
				path: '',
				component: BookListComponent,
				pathMatch: 'full',
				resolve: {
					books: BookResolver,
					authors: AuthorResolver,
					categories: CategoryResolver
				}
			},
			{
				path: 'add',
				component: BookCreateEditComponent,
				pathMatch: 'full',
				resolve: {
					authors: AuthorResolver,
					categories: CategoryResolver
				}
			},
			{
				path: 'edit/:id',
				component: BookCreateEditComponent,
				pathMatch: 'full',
				resolve: {
					authors: AuthorResolver,
					categories: CategoryResolver
				}
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class BookRoutingModule {}

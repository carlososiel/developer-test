import { AuthorCreateEditComponent } from './author-create-edit/author-create-edit.component';
import { AuthorResolver } from './../../core/resolver/author.resolver';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorComponent } from './author.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: AuthorComponent,
		children: [
			{
				path: '',
				component: AuthorListComponent,
				pathMatch: 'full',
				resolve: {
					authors: AuthorResolver
				}
			},
			{ path: 'add', component: AuthorCreateEditComponent, pathMatch: 'full' },
			{ path: 'edit/:id', component: AuthorCreateEditComponent, pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AuthorRoutingModule {}

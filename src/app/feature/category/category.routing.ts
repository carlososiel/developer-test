import { CategoryCreateEditComponent } from './category-create-edit/category-create-edit.component';
import { CategoryResolver } from './../../core/resolver/category.resolver';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: CategoryComponent,
		children: [
			{
				path: '',
				component: CategoryListComponent,
				pathMatch: 'full',
				resolve: {
					categories: CategoryResolver
				}
			},
			{ path: 'add', component: CategoryCreateEditComponent, pathMatch: 'full' },
			{ path: 'edit/:id', component: CategoryCreateEditComponent, pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class CategoryRoutingModule {}

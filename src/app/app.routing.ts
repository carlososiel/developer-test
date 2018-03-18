import { NotFoundComponent } from './shared/not-found/not-found.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{ path: '', redirectTo: 'books', pathMatch: 'full' },
	{ path: 'books', loadChildren: './feature/book/book.module#BookModule' },
	{ path: 'categories', loadChildren: './feature/category/category.module#CategoryModule' },
	{ path: 'authors', loadChildren: './feature/author/author.module#AuthorModule' },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {
	constructor(private _router: Router) {
		this._router.errorHandler = (err: any) => console.error(err);
	}
}

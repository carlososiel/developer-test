import { BookResolver } from './resolver/book.resolver';
import { CategoryResolver } from './resolver/category.resolver';
import { AuthorResolver } from './resolver/author.resolver';
import { NotFoundModule } from './../shared/not-found/not-found.module';
import { NavbarModule } from './../shared/navbar/navbar.module';
import { DataService } from './data.service';
import { CategoryModule } from './../feature/category/category.module';
import { BookModule } from './../feature/book/book.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorModule } from '../feature/author/author.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NavbarModule,
		BookModule,
		CategoryModule,
		AuthorModule,
		NotFoundModule
	],
	providers: [ DataService, BookResolver, AuthorResolver, CategoryResolver ],
	exports: [ NavbarModule, NotFoundModule ]
})
export class CoreModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: []
		};
	}
}

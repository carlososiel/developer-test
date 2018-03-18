import { CategoryCreateEditComponent } from './category-create-edit/category-create-edit.component';
import { SharedModule } from './../../shared/shared.module';
import { CategoryRoutingModule } from './category.routing';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
	imports: [ SharedModule, CategoryRoutingModule ],
	declarations: [ CategoryComponent, CategoryCreateEditComponent, CategoryListComponent ],
	exports: [ CategoryComponent, CategoryCreateEditComponent, CategoryListComponent ]
})
export class CategoryModule {}

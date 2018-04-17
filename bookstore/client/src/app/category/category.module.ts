import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryRoutingModule} from './category-routing.module';
import {SharedModule} from '../shared/shared.module';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule
  ],
  declarations: [CategoryListComponent, CategoryEditComponent],
  entryComponents: [CategoryEditComponent]
})

export class CategoryModule {
}

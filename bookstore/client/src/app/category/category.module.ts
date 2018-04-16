import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryRoutingModule} from './category-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule
  ],
  declarations: [CategoryListComponent]
})

export class CategoryModule {
}

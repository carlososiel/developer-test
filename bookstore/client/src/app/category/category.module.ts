import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  declarations: [CategoryListComponent]
})
export class CategoryModule { }

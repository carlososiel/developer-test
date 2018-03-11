import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryListService} from "./category-list/category-list.services.component";
import {UiModule} from "../ui/ui.module";
import {CategoryRoutingModule, routableComponents} from "./category-routing.module";
import {FormsModule} from "@angular/forms";
import {CategoryAddService} from "./category-add/category-add.services.component";
import {CategoryUpdService} from "./category-upd/category-upd.services.component";

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    UiModule,
    FormsModule
  ],
  declarations: [routableComponents],
  providers: [
    CategoryListService,
    CategoryAddService,
    CategoryUpdService
  ]
})
export class CategoryModule { }

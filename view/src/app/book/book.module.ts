import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {BookRoutingModule, routableComponents} from './book-routing.module';
import {BookListService} from "./book-list/book-list.services.component";
import {AuthorListService} from "../author/author-list/author-list.services.component";
import {CategoryListService} from "../category/category-list/category-list.services.component";
import {UiModule} from "../ui/ui.module";
import {BookAddService} from "./book-add/book-add.services.component";
import {BookUpdService} from "./book-upd/category-upd.services.component";

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    UiModule,
    FormsModule
  ],
  declarations: [routableComponents],
  providers: [
    BookAddService,
    BookUpdService,
    BookListService,
    AuthorListService,
    CategoryListService
  ]
})
export class BookModule {
}

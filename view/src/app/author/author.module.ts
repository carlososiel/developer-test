import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorListService} from "./author-list/author-list.services.component";
import {AuthorRoutingModule, routableComponents} from "./author-routing.module";
import {UiModule} from "../ui/ui.module";
import {AuthorAddService} from "./author-add/author-add.services.component";
import {FormsModule} from "@angular/forms";
import {AuthorUpdService} from "./author-upd/author-upd.services.component";

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
    UiModule,
    FormsModule
  ],
  declarations: [routableComponents],
  providers: [
    AuthorAddService,
    AuthorUpdService,
    AuthorListService
  ]
})
export class AuthorModule { }

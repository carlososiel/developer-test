import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BookModule} from "./book/book.module";
import {MenuComponent} from "./home/menu/menu.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthorModule} from "./author/author.module";
import {CategoryModule} from "./category/category.module";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    AuthorModule,
    CategoryModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

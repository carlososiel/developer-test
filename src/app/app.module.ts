import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryDetailsComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

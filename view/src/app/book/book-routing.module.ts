import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookAddComponent} from './book-add/book-add.component';
import {BookUpdComponent} from "./book-upd/book-upd.component";

const routes: Routes = [
  {path: 'book', component: BookListComponent},
  {path: 'book/add', component: BookAddComponent},
  {path: 'book/upd/:id', component: BookUpdComponent}
];
export const routableComponents = [
  BookListComponent,
  BookAddComponent,
  BookUpdComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}

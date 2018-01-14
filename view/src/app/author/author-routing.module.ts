import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthorListComponent} from "./author-list/author-list.component";
import {AuthorAddComponent} from "./author-add/author-add.component";
import {AuthorUpdComponent} from "./author-upd/author-upd.component";

const routes: Routes = [
  {path: 'author', component: AuthorListComponent},
  {path: 'author/add', component: AuthorAddComponent},
  {path: 'author/upd/:id', component: AuthorUpdComponent}
];
export const routableComponents = [
  AuthorListComponent,
  AuthorAddComponent,
  AuthorUpdComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule {
}

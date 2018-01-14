import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryUpdComponent} from "./category-upd/category-upd.component";
import {CategoryAddComponent} from "./category-add/category-add.component";
import {CategoryListComponent} from "./category-list/category-list.component";

const routes: Routes = [
  {path: 'category', component: CategoryListComponent},
  {path: 'category/add', component: CategoryAddComponent},
  {path: 'category/upd/:id', component: CategoryUpdComponent}
];
export const routableComponents = [
  CategoryListComponent,
  CategoryAddComponent,
  CategoryUpdComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}

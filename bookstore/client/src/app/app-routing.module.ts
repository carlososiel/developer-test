import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './_components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'book', loadChildren: './book/book.module#BookModule'},
  {path: 'author', loadChildren: './author/author.module#AuthorModule'},
  {path: 'category', loadChildren: './category/category.module#CategoryModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

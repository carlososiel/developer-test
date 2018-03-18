import { AuthorCategoryFilterPipe } from './../core/pipes/author-category-filter.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
	declarations: [ AuthorCategoryFilterPipe ],
	exports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, AuthorCategoryFilterPipe ]
})
export class SharedModule {}

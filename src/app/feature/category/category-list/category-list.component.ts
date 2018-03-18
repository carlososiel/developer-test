import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../../core/data.service';
import { Category } from './../../../core/models';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	encapsulation: ViewEncapsulation.None
})
export class CategoryListComponent implements OnInit {
	categories: Category[];
	displayedColumns = [ 'name', 'created date' ];

	constructor(private _dataService: DataService, private _route: ActivatedRoute) {}

	ngOnInit() {
		this._route.data.subscribe((data) => (this.categories = data['categories']));
	}

	deleteCategory(id: string | number) {
		this._dataService
			.delete('category', id)
			.subscribe(
				(res) => (this.categories = this.categories.filter((item) => item._id !== id)),
				(err) => console.error(err)
			);
	}
}

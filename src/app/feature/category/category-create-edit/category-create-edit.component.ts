import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../../../core/data.service';
import { Category } from './../../../core/models';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-category-create-edit',
	templateUrl: './category-create-edit.component.html',
	encapsulation: ViewEncapsulation.None
})
export class CategoryCreateEditComponent implements OnInit {
	routeId: string = null;
	category: Category = <Category>{};

	constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute) {}

	ngOnInit() {
		this.routeId = this._route.snapshot.paramMap.get('id');
		if (this.routeId) {
			this.getCategory();
		}
	}

	getCategory() {
		this._dataService.getById('category', this.routeId).subscribe((category) => (this.category = category));
	}

	saveCategory() {
		this._dataService
			.save('category', this.category)
			.subscribe((res) => this._router.navigate([ '/categories' ]), (err) => console.error(err));
	}

	updateCategory() {
		this._dataService
			.update('category', this.routeId, this.category)
			.subscribe((res) => this._router.navigate([ `/categories` ]), (err) => console.error(err));
	}
}

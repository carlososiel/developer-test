import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../../../core/data.service';
import { Author } from './../../../core/models';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-author-create-edit',
	templateUrl: './author-create-edit.component.html',
	encapsulation: ViewEncapsulation.None
})
export class AuthorCreateEditComponent implements OnInit {
	routeId: string = null;
	author: Author = <Author>{};

	constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute) {}

	ngOnInit() {
		this.routeId = this._route.snapshot.paramMap.get('id');
		if (this.routeId) {
			this.getAuthor();
		}
	}

	getAuthor() {
		this._dataService.getById('author', this.routeId).subscribe((author) => (this.author = author));
	}

	saveAuthor() {
		this._dataService
			.save('author', this.author)
			.subscribe((res) => this._router.navigate([ '/authors' ]), (err) => console.error(err));
	}

	updateAuthor() {
		this._dataService
			.update('author', this.routeId, this.author)
			.subscribe((res) => this._router.navigate([ '/authors' ]), (err) => console.error(err));
	}
}

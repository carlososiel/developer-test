import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../../../core/data.service';
import { Author } from './../../../core/models';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-author-list',
	templateUrl: './author-list.component.html',
	styleUrls: []
})
export class AuthorListComponent implements OnInit {
	authors: Author[];
	displayedColumns = [ 'name', 'lastname', 'created date' ];

	constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute) {}

	ngOnInit() {
		this._route.data.subscribe((data) => (this.authors = data['authors']));
	}

	deleteAuthor(id: string) {
		this._dataService
			.delete('author', id)
			.subscribe(
				(res) => (this.authors = this.authors.filter((item) => item._id !== id)),
				(err) => console.error(err)
			);
	}
}

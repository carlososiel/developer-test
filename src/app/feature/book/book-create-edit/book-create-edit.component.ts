import { Router, ActivatedRoute } from '@angular/router';
import { Author, Category, Book } from './../../../core/models';
import { DataService } from './../../../core/data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-book-create-edit',
	templateUrl: './book-create-edit.component.html',
	styleUrls: [],
	encapsulation: ViewEncapsulation.None
})
export class BookCreateEditComponent implements OnInit {
	authors: Author[];
	book: Book = <Book>{};
	routeId: string = null;
	categories: Category[];

	constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute) {}

	ngOnInit() {
		this.routeId = this._route.snapshot.paramMap.get('id');
		if (this.routeId) {
			this.getBook(this.routeId);
		}
		this._route.data.subscribe((data) => {
			this.authors = data['authors'];
			this.categories = data['categories'];
		});
	}

	getBook(id: string) {
		this._dataService.getById('book', id).subscribe((book) => (this.book = book));
	}

	saveBook() {
		this._dataService
			.save('book', this.book)
			.subscribe((res) => this._router.navigate([ `/books` ]), (err) => console.error(err));
	}

	updateBook() {
		this._dataService
			.update('book', this.routeId, this.book)
			.subscribe((res) => this._router.navigate([ `/books` ]), (err) => console.error(err));
	}
}

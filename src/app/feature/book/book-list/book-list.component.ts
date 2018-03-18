import { map } from 'rxjs/operators';
import { DataService } from './../../../core/data.service';
import { Book, Author, Category } from './../../../core/models';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: [],
	encapsulation: ViewEncapsulation.None
})
export class BookListComponent implements OnInit {
	books: Book[];
	authors: Author[];
	categories: Category[];

	selectedAuthor = 'null';
	selectedCategory = 'null';
	displayedColumns = [ 'title', 'author', 'category', 'isbn', 'publisher', 'created date' ];

	constructor(private _dataService: DataService, private _route: ActivatedRoute) {}

	ngOnInit() {
		this._route.data.subscribe((data) => {
			this.books = data['books'];
			this.authors = data['authors'];
			this.categories = data['categories'];
		});
	}

	deleteBook(id: string | number) {
		this._dataService
			.delete('book', id)
			.subscribe(
				(res) => (this.books = this.books.filter((item) => item._id !== id)),
				(err) => console.error(err)
			);
	}
}
